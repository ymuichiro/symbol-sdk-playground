import { NetworkType } from "symbol-sdk/dist/src/model/network";

export interface SymbolNetworkInfo {
  networkType: NetworkType;
  generationHashSeed: string;
  epochAdjustment: number;
  currencyMosaicId: string;
}
