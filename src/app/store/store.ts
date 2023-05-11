import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducers from "./reducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: rootReducers,
  // reducer: {
  //   counter: counterReducer,
  // },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
