import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
