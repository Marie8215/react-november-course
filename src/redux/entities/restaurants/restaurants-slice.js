import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantsSlice.selectors;
