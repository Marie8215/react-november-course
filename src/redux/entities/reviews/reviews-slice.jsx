import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
