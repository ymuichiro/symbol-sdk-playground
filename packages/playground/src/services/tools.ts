import { pino } from "pino";
import WebSocket from "ws";

export const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

interface WebSocketResponse {
  uid: string;
  subscribe?: string;
}

/**
 * symbol-sdk@v2 TransactionService 相当
 * Transaction のアナウンスとリアルタイムな Confirmed の検出、またはエラーの返却を行う
 */
export async function observalTransactionStatus(plainAddress: string, hash: string, websocket: string) {
  const ws = new WebSocket(websocket);
  ws.on("open", () => logger.info({ node: websocket, address: plainAddress }, "web socket connected"));
  ws.on("close", () => logger.info("web socket disconnected"));
  ws.on("message", (message) => {
    const res = JSON.parse(message.toString()) as WebSocketResponse;
    if ("uid" in res) {
      const body: WebSocketResponse = { uid: res.uid, subscribe: `status/${plainAddress}` };
      ws.send(JSON.stringify(body));
    } else {
      console.log(res);
    }
  });
}

export async function observalConfirmedTransaction(plainAddress: string, websocket: string) {
  const ws = new WebSocket(websocket);
  ws.on("open", () => logger.info({ node: websocket, address: plainAddress }, "web socket connected"));
  ws.on("close", () => logger.info("web socket disconnected"));
  ws.on("message", (message) => {
    const res = JSON.parse(message.toString()) as WebSocketResponse;
    if ("uid" in res) {
      const body: WebSocketResponse = { uid: res.uid, subscribe: `confirmedAdded/${plainAddress}` };
      ws.send(JSON.stringify(body));
    } else {
      console.log(res);
    }
  });
}

// const repositoryFactory = new RepositoryFactoryHttp("https://mikun-testnet.tk:3001");
// const receiptHttp = repositoryFactory.createReceiptRepository();
// const transactionHttp = repositoryFactory.createTransactionRepository();
// const listener = repositoryFactory.createListener();
// const transactionService = new TransactionService(transactionHttp, receiptHttp);
// return listener.open().then(async () => {
//   try {
//     console.log("... アナウンス待機中");
//     const tx = await firstValueFrom(
//       merge(
//         transactionService.announce(transaction, listener),
//         listener.status(address).pipe(
//           filter((error) => error.hash === transaction.hash),
//           tap((error) => {
//             throw new Error(error.code);
//           })
//         )
//       )
//     );
//     console.log(tx);
//     listener.close();
//   } catch (err) {
//     console.error(err);
//   }
// });
