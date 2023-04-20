import { SYSTEM_CONST } from "../../utils";
import { JSUtils } from "../../utils/jsutils";

const clearAll = () => {
  localStorage.clear();
};

const setToken = (token: string) => {
  localStorage.removeItem(SYSTEM_CONST.STORAGE.TOKEN);
  localStorage.setItem(
    SYSTEM_CONST.STORAGE.TOKEN,
    JSUtils.encryptStorage(SYSTEM_CONST.PI, token)
  );
};

const getToken = () => {
  return JSUtils.decryptStorage(
    SYSTEM_CONST.PI,
    localStorage.getItem(SYSTEM_CONST.STORAGE.TOKEN)
  );
};

export const StorageService = {
  clearAll,
  setToken,
  getToken,
};
