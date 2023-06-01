import { UInt64 } from "symbol-sdk";
import { PlainMessage } from "symbol-sdk/dist/src/model/message/PlainMessage";
import { Mosaic } from "symbol-sdk/dist/src/model/mosaic/Mosaic";
import { Deadline } from "symbol-sdk/dist/src/model/transaction/Deadline";
import { TransferTransaction } from "symbol-sdk/dist/src/model/transaction/TransferTransaction";
import { getSymbolConfigs } from "../services/config";
import { announce } from "../services/tools";

(async () => {
  const config = await getSymbolConfigs();

  const transfer = TransferTransaction.create(
    Deadline.create(config.network.epochAdjustment),
    config.account.userB.address,
    [new Mosaic(config.network.currencyMosaicId, UInt64.fromUint(1000 * Math.pow(10, 6)))],
    PlainMessage.create(new Array(1).fill("tst").join("")),
    config.network.networkType
  ).setMaxFee(100);

  const signed = config.account.userA.sign(transfer, config.network.generationHash);

  const r = await announce(config.account.userA.address.plain(), signed.payload, signed.hash, config);
  console.log(r);
})();
