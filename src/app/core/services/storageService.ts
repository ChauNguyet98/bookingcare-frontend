import { SYSTEM_CONST } from "../../utils";
import { JSUtils } from "../../utils/jsutils";

export const storageService = {};

export class StorageService {
  public setToken = (token: string) => {
    localStorage.removeItem(SYSTEM_CONST.STORAGE.TOKEN);
    localStorage.setItem(
      SYSTEM_CONST.STORAGE.TOKEN,
      JSUtils.encryptStorage(SYSTEM_CONST.PI, token)
    );
  };

  public getToken = () => {
    return JSUtils.decryptStorage(
      SYSTEM_CONST.PI,
      localStorage.getItem(SYSTEM_CONST.STORAGE.TOKEN)
    );
  };
}
