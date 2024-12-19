import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slise";

export const getDish = createAsyncThunk(
  "dish/getDish",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("dish/getDish нет данных");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) =>
      selectDishById(getState(), id).length === 0,
  }
);
