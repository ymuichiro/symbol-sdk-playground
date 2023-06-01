/*

 シークレットロックの検証を行う

*/

import crypto from "crypto";
import { sha3_256 } from "js-sha3";
import { SecretProofTransaction } from "symbol-sdk";
import { UInt64 } from "symbol-sdk/dist/src/model/UInt64";
import { LockHashAlgorithm } from "symbol-sdk/dist/src/model/lock/LockHashAlgorithm";
import { Mosaic } from "symbol-sdk/dist/src/model/mosaic/Mosaic";
import { Deadline } from "symbol-sdk/dist/src/model/transaction/Deadline";
import { SecretLockTransaction } from "symbol-sdk/dist/src/model/transaction/SecretLockTransaction";
import { getSymbolConfigs, transactionRoutesApi } from "../services/config";
import { logger } from "../services/tools";

(async () => {
  const configs = await getSymbolConfigs();
  const random = crypto.randomBytes(20);
  const hash = sha3_256.create();
  const secret = hash.update(random).hex();
  const proof = random.toString("hex");

  logger.info({ secret, proof }, "generate keys");

  const secretLock = SecretLockTransaction.create(
    Deadline.create(configs.network.epochAdjustment),
    new Mosaic(configs.network.currencyMosaicId, UInt64.fromUint(1000 * Math.pow(10, 6))),
    UInt64.fromUint(480),
    LockHashAlgorithm.Op_Sha3_256,
    secret,
    configs.account.userB.address,
    configs.network.networkType
  ).setMaxFee(100);

  const signedSecretLockTx = configs.account.userA.sign(secretLock, configs.network.generationHash);
  const announcedSecretLock = await transactionRoutesApi.announceTransaction({ transactionPayload: { payload: signedSecretLockTx.payload } });

  logger.info(
    {
      from: configs.account.userA.address.plain(),
      to: configs.account.userB.address.plain(),
      explorer: `${configs.network.explorer}/${signedSecretLockTx.hash}`,
    },
    announcedSecretLock.message
  );

  const proofTx = SecretProofTransaction.create(
    Deadline.create(configs.network.epochAdjustment),
    LockHashAlgorithm.Op_Sha3_256,
    secret,
    configs.account.userB.address,
    proof,
    configs.network.networkType
  ).setMaxFee(100);

  const signedProofTx = configs.account.userB.sign(proofTx, configs.network.generationHash);
  const announcedProofTx = await transactionRoutesApi.announceTransaction({
    transactionPayload: { payload: signedProofTx.payload },
  });

  logger.info(
    {
      from: configs.account.userA.address.plain(),
      to: configs.account.userB.address.plain(),
      explorer: `${configs.network.explorer}/${signedProofTx.hash}`,
    },
    announcedProofTx.message
  );
})();
