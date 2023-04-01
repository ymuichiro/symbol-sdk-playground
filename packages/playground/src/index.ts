import { Account, NetworkType, MosaicId, UnresolvedMosaicId } from "symbol-sdk";
import { Configuration } from "symbol-oas";

const config = new Configuration({
  basePath: "symbolnode.blockchain-authn.app:3001",
});



// 現在のSymbolアカウントの残高を取得する
function getSymbolAccountBalance(account: Account): number {
  return 0;
}

// 指定した MosaicID のSymbolアカウント残高を取得する
