import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Manga {
  id: number;
  title: string;
  pages: number;
  publicUrls: string[];
}

export interface MangaState {
  entities: Manga[];
  focused?: Manga;
}

const initialState: MangaState = {
  entities: [],
};

const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    setEntities(state, action: PayloadAction<Manga[]>) {
      state.entities = action.payload;
    },
    setFocused(state, action: PayloadAction<number>) {
      state.focused = state.entities.find(
        (manga) => manga.id === action.payload
      );
    },
  },
});

export const selectMangaEntities = (state: RootState): Manga[] => {
  return state.manga.entities;
};

export const mangaReducer = mangaSlice.reducer;
export const { setEntities, setFocused } = mangaSlice.actions;
