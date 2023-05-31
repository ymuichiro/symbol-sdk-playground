import { getSymbolConfigs } from "../services/config";
import { announceByWs } from "../services/tools";

(async () => {
  const config = await getSymbolConfigs();

  announceByWs(config.account.userA.address.plain(), {} as any, config.network.websocket);
})();
