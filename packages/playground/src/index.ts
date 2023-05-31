import crypto from "crypto";
import { sha3_256 } from "js-sha3";
import { Configuration, NetworkRoutesApi, TransactionRoutesApi } from "symbol-oas/types";
import {
  Account,
  AggregateTransaction,
  Deadline,
  LockHashAlgorithm,
  Mosaic,
  NamespaceId,
  NetworkType,
  PlainMessage,
  SecretLockTransaction,
  TransferTransaction,
  UInt64,
} from "symbol-sdk";

const random = crypto.randomBytes(20);
const hash = sha3_256.create();
const secret = hash.update(random).hex();
const proof = random.toString("hex");

const user = Account.createFromPrivateKey("CC59EA75C5F9FBC787212EC3983BE4731117DD3385EAA383E86D606545F491A2", NetworkType.TEST_NET);
console.log("user", user.address.plain());
const userB = Account.createFromPrivateKey("2E6714D78B0940CBFE19F68A5D5B0630BFE80843AAEA8E0EF5AAAF94670C5C1D", NetworkType.TEST_NET);
console.log("userB", userB.address.plain());
const system = Account.createFromPrivateKey("BA97827A04056DFCC862ACA36DDAB1FDBAE741497E531A7D296A8A48069BC1C9", NetworkType.TEST_NET);
console.log("system", system.address.plain());

const configuration = new Configuration({ basePath: "https://mikun-testnet.tk:3001" });
const networkRoutesApi = new NetworkRoutesApi(configuration);
const transactionRoutesApi = new TransactionRoutesApi(configuration);
/**
 * システムからアグリゲートコンプリートとして Secret Lock + 手数料送信とする
 * SecretLockの宛先は１箇所のみ
 * RTP は個別に Transfer
 *
 * RTP 送信時に本文へコントラクト時のHashを含める
 * -> Quset が正しく完了したもののみ、コントラクトとRTPを追うことが可能(RTP付与時にコントラクトHashが存在するか一致するかも見る)
 */

(async () => {
  const res = await networkRoutesApi.getNetworkProperties();
  const epoch = res.network.epochAdjustment?.replace("s", "");
  const gengeration = res.network.generationHashSeed;

  const transferTx = TransferTransaction.create(
    Deadline.create(Number(epoch)),
    system.address,
    [new Mosaic(new NamespaceId("symbol.xym"), UInt64.fromUint(1000000))],
    PlainMessage.create("test"),
    NetworkType.TEST_NET
  ).setMaxFee(100);

  const tx = SecretLockTransaction.create(
    Deadline.create(Number(epoch)),
    new Mosaic(new NamespaceId("symbol.xym"), UInt64.fromUint(1000000)),
    UInt64.fromUint(480),
    LockHashAlgorithm.Op_Sha3_256,
    secret,
    userB.address,
    NetworkType.TEST_NET
  ).setMaxFee(100);

  const aggTx = AggregateTransaction.createComplete(
    Deadline.create(Number(epoch)),
    [transferTx.toAggregate(user.publicAccount), tx.toAggregate(user.publicAccount)],
    NetworkType.TEST_NET,
    [],
    UInt64.fromUint(1000000)
    // undefined
    // user.publicAccount
  );

  console.log("---");
  console.log(aggTx.serialize());

  console.log("---");

  const aggregate = AggregateTransaction.createFromPayload(aggTx.serialize());

  console.log("secret", secret);
  console.log("proof", proof);

  console.log(aggregate);

  const signed = user.sign(aggregate, gengeration as string);

  console.log(signed);
  transactionRoutesApi.announceTransaction({ transactionPayload: { payload: signed.payload } }).then(console.log);
})();
