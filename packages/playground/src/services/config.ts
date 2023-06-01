import dotenv from "dotenv";
import { NetworkRoutesApi } from "symbol-oas/types/apis/NetworkRoutesApi";
import { TransactionRoutesApi } from "symbol-oas/types/apis/TransactionRoutesApi";
import { Configuration } from "symbol-oas/types/runtime";
import { Account } from "symbol-sdk/dist/src/model/account";
import { NamespaceId } from "symbol-sdk/dist/src/model/namespace/NamespaceId";

export interface SymbolConfig {
  network: {
    node: string;
    websocket: string;
    explorer: string;
    networkType: NetworkType;
    currencyMosaicId: NamespaceId;
    generationHash: string;
    epochAdjustment: number;
  };
  account: {
    userA: Account;
    userB: Account;
    userC: Account;
  };
}

dotenv.config();
const NODE = process.env.SYMBOL_NODE as string;
const NODE_WS = process.env.SYMBOL_NODE_WS as string;
const PRIVATEKEY_A = process.env.SYMBOL_PRIVATE_KEY_A as string;
const PRIVATEKEY_B = process.env.SYMBOL_PRIVATE_KEY_B as string;
const PRIVATEKEY_C = process.env.SYMBOL_PRIVATE_KEY_C as string;
enum NetworkType {
  MAIN_NET = 104,
  TEST_NET = 152,
}

const configuration = new Configuration({ basePath: NODE });
export const networkRoutesApi = new NetworkRoutesApi(configuration);
export const transactionRoutesApi = new TransactionRoutesApi(configuration);

/** Symbol Configs */
export async function getSymbolConfigs() {
  const networkTypeRow = await networkRoutesApi.getNetworkType();
  const network = await networkRoutesApi.getNetworkProperties();
  const networkType = networkTypeRow.name === "testnet" ? NetworkType.TEST_NET : NetworkType.MAIN_NET;

  return {
    network: {
      node: NODE,
      websocket: NODE_WS,
      explorer: networkType === NetworkType.TEST_NET ? "https://testnet.symbol.fyi" : "https://symbol.fyi",
      networkType: networkType,
      currencyMosaicId: new NamespaceId("symbol.xym"),
      generationHash: network.network.generationHashSeed as string,
      epochAdjustment: Number((network.network.epochAdjustment as string).replace("s", "")),
    },
    account: {
      userA: Account.createFromPrivateKey(PRIVATEKEY_A, networkType),
      userB: Account.createFromPrivateKey(PRIVATEKEY_B, networkType),
      userC: Account.createFromPrivateKey(PRIVATEKEY_C, networkType),
    },
  };
}
