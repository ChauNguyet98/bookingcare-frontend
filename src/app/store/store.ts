import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reducers from "./reducer";

export const store = configureStore({
  reducer: reducers,
  // reducer: {
  //   counter: counterReducer,
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
