import { pino } from "pino";
import WebSocket from "ws";
import { SymbolConfig, transactionRoutesApi } from "./config";

export const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

interface WebSocketInitialResponse {
  uid: string;
  subscribe?: string;
}

interface WebSocketResponseBase {
  topic: string;
}

interface WebSocketStatusResponse extends WebSocketResponseBase {
  data: {
    hash: string;
    code: string;
    deadline: string;
  };
}

interface WebSocketConfirmedResponse extends WebSocketResponseBase {
  data: {
    transaction: { [key: string]: any };
    meta: {
      hash: string;
      merkleComponentHash: string;
      height: string;
    };
  };
}

/**
 * symbol-sdk@v2 TransactionService 相当
 * Transaction のアナウンスとリアルタイムな Confirmed の検出、またはエラーの返却を行う
 */
export async function announce(plainAddress: string, signedPayload: string, signedTransactionHash: string, config: SymbolConfig): Promise<WebSocketConfirmedResponse> {
  return await new Promise(function (resolve, reject) {
    const ws = new WebSocket(config.network.websocket);

    ws.on("open", () => {
      logger.info({ node: config.network.websocket, address: plainAddress }, "web socket connected");
      transactionRoutesApi.announceTransaction({ transactionPayload: { payload: signedPayload } }).then((e) => {
        logger.info(
          {
            explorer: `${config.network.explorer}/transactions/${signedTransactionHash}`,
            network: config.network.networkType,
            from: config.account.userA.address.plain(),
            to: config.account.userB.address.plain(),
          },
          e.message
        );
      });
    });

    ws.on("close", () => logger.info("web socket disconnected"));

    ws.on("message", (message) => {
      let res = JSON.parse(message.toString());
      const statusFlag: string = `status/${plainAddress}`;
      const confirmedFlag: string = `confirmedAdded/${plainAddress}`;

      if ("uid" in res) {
        const body1: WebSocketInitialResponse = { uid: res.uid, subscribe: statusFlag };
        const body2: WebSocketInitialResponse = { uid: res.uid, subscribe: confirmedFlag };
        ws.send(JSON.stringify(body1));
        ws.send(JSON.stringify(body2));
      } else {
        const responseBase = res as WebSocketResponseBase;

        if (responseBase.topic === statusFlag) {
          const responseStatus = responseBase as WebSocketStatusResponse;
          if (responseStatus.data.hash === signedTransactionHash) {
            ws.close();
            reject(new Error(responseStatus.data.code));
          }
        } else if (responseBase.topic === confirmedFlag) {
          const responseConfirmed = responseBase as WebSocketConfirmedResponse;
          if (responseConfirmed.data.meta.hash === signedTransactionHash) {
            ws.close();
            resolve(responseConfirmed);
          }
        }
      }
    });
  });
}
