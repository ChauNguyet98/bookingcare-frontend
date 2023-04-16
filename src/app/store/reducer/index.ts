import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./auth/loginReducer";

const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;
