import apiService from "../core/services/apiService";
import { Login } from "../models/auth.models";
import { SYSTEM_CONST } from "../utils";

const login = (data: Login) => {
  return apiService.post(SYSTEM_CONST.API.AUTH.LOGIN, data);
};

const AuthService = {
  login,
};

export default AuthService;
