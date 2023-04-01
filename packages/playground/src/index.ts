import fetch from "node-fetch";
import { NetworkType } from "symbol-sdk/dist/src/model/network";
import { Address } from "symbol-sdk/dist/src/model/account";
import { SymbolNetworkInfo } from "../model";
import {
  AccountDTO,
  AccountRoutesApi,
  Configuration,
  NetworkRoutesApi,
  Mosaic,
  MosaicRoutesApi,
} from "symbol-oas/types";

(global as any).fetch = fetch;

const config = new Configuration({
  basePath: "https://symbolnode.blockchain-authn.app:3001",
});

const accountRoutesApi = new AccountRoutesApi(config);
const networkRoutesApi = new NetworkRoutesApi(config);
const mosaicRoutesApi = new MosaicRoutesApi(config);

// 現在のネットワーク設定を取得する
async function getCurrentSymbolNetworkInfo(): Promise<SymbolNetworkInfo> {
  const { network, chain } = await networkRoutesApi.getNetworkProperties();
  return {
    networkType: network.identifier === "mainnet" ? NetworkType.MAIN_NET : NetworkType.TEST_NET,
    generationHashSeed: network.generationHashSeed as string,
    epochAdjustment: parseInt(network.epochAdjustment!.replace("s", ""), 10),
    currencyMosaicId: chain.currencyMosaicId!.replace(/0x|'/g, ""),
  };
}

// 現在のSymbolアカウント情報を取得する
async function getSymbolAccountInfo(accountId: string): Promise<AccountDTO> {
  const { account } = await accountRoutesApi.getAccountInfo({ accountId });
  return account;
}

// Mosaic を読み取り可能な形式に変換する
async function mosaicParser({ id, amount }: Mosaic) {
  const { mosaic } = await mosaicRoutesApi.getMosaic({ mosaicId: id });
  return {
    id: mosaic.id,
    amount: Number(amount) === 0 ? 0 : Number(amount) / Math.pow(10, mosaic.divisibility),
    divisibility: mosaic.divisibility,
    mosaicOwnerAddress: Address.createFromEncoded(mosaic.ownerAddress),
  };
}
