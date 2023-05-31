import { UInt64 } from "symbol-sdk";
import { PlainMessage } from "symbol-sdk/dist/src/model/message/PlainMessage";
import { Mosaic } from "symbol-sdk/dist/src/model/mosaic/Mosaic";
import { Deadline } from "symbol-sdk/dist/src/model/transaction/Deadline";
import { TransferTransaction } from "symbol-sdk/dist/src/model/transaction/TransferTransaction";
import { getSymbolConfigs, transactionRoutesApi } from "../services/config";
import { logger, observalTransactionStatus } from "../services/tools";

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

  await observalTransactionStatus(config.account.userB.address.plain(), signed.hash, config.network.websocket);

  const announced = await transactionRoutesApi.announceTransaction({ transactionPayload: { payload: signed.payload } });
  logger.info(
    {
      explorer: `${config.network.explorer}/transactions/${signed.hash}`,
      network: config.network.networkType,
      from: config.account.userA.address.plain(),
      to: config.account.userB.address.plain(),
    },
    announced.message
  );
})();
