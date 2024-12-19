import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "./get-menu";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getMenu.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;
