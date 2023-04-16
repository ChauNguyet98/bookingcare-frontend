import { ApiService } from "../core/services/apiService";
import { Login } from "../models/auth.models";
import { SYSTEM_CONST } from "../utils";

const apiService = ApiService;

const login = (data: Login) => {
  return apiService.post(SYSTEM_CONST.API.AUTH.LOGIN, data);
};

export const AuthService = {
  login,
};
