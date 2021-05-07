import { configureStore } from "@reduxjs/toolkit";
import { loliReducer } from "../features/lolis/loliSlice";

export const store = configureStore({
  reducer: {
    loli: loliReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
