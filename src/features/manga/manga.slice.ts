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
  focusedEntity: Manga;
}

const initialState: MangaState = {
  entities: [],
  focusedEntity: {
    id: -1,
    title: "",
    pages: 0,
    publicUrls: [],
  },
};

const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    setEntities(state, action: PayloadAction<Manga[]>) {
      state.entities = action.payload;
    },
    setFocused(state, action: PayloadAction<Manga>) {
      state.focusedEntity = action.payload;
    },
  },
});

export const selectMangaEntities = (state: RootState): Manga[] => {
  return state.manga.entities;
};

export const selectFocusedEntity = (state: RootState): Manga => {
  return state.manga.focusedEntity;
};

export const mangaReducer = mangaSlice.reducer;
export const { setEntities, setFocused } = mangaSlice.actions;
