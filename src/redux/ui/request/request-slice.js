import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusbyId: (state, id) => state[id],
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = "pending";
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = "rejected";
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = "fulfilled";
        }
      ),
});

export const { selectRequestStatusbyId } = requestSlice.selectors;
