import { configureStore } from "@reduxjs/toolkit";
import { loliReducer } from "../features/lolis/loli.slice";
import { mangaReducer } from "../features/manga/manga.slice";

export const store = configureStore({
  reducer: {
    lolis: loliReducer,
    manga: mangaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
