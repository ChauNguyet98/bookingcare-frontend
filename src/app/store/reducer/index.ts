import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducers = combineReducers({
  auth: authReducers,
});

export default persistReducer(rootPersistConfig, rootReducers);
