import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;
