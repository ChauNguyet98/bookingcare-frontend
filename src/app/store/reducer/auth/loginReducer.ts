import { Action } from "../../../models/action.models";
import { LoginActionType } from "../../../models/auth.models";

const initialState = {
  token: null,
};

export const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LoginActionType.LOGIN_FAIL:
      return {
        ...state,
        token: null,
      };
    case LoginActionType.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
