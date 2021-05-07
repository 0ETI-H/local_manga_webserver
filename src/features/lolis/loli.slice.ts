import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Loli {
  firstName: string;
  lastName: string;
}

export interface LoliState {
  entities: Loli[];
  status: "idle" | "pending" | "success" | "error";
  message?: string;
}

const initialState: LoliState = {
  entities: [],
  status: "idle",
};

const loliSlice = createSlice({
  name: "loli",
  initialState,
  reducers: {
    addLoli(state, action: PayloadAction<Loli>) {
      state.entities.push(action.payload);
    },
  },
});

export const selectAllLolis = (state: RootState): Loli[] => {
  return state.loli.entities;
};

export const { addLoli } = loliSlice.actions;
export const loliReducer = loliSlice.reducer;
