import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((accumulator, review) => {
    accumulator[review.id] = review;
    return accumulator;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
