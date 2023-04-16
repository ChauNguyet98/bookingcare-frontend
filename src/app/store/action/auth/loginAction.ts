import { LoginActionType } from "../../../models/auth.models";

const LoginSuccess = (token: string) => ({
  type: LoginActionType.LOGIN_SUCCESS,
  payload: token,
});

const LoginFail = () => ({
  type: LoginActionType.LOGIN_FAIL,
});

const Logout = () => ({
  type: LoginActionType.LOGOUT,
});

export const LoginAction = {
  LoginSuccess,
  LoginFail,
  Logout,
};
