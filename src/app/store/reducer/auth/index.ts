import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

const authReducers = combineReducers({
  login: loginReducer,
});

export default persistReducer(authPersistConfig, authReducers);
