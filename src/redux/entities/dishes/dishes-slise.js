import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

const initialState = {
  dishes: normalizedDishes.reduce((accumulator, dish) => {
    accumulator[dish.id] = dish;
    return accumulator;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.dishes[id],
  },
});

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;
