export interface Login {
  email: string;
  password: string;
}

export interface LoginInfo {
  token: string;
}

export enum LoginActionType {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT = "LOGOUT",
}
