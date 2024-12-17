import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;

      return state;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }

      return state;
    },
  },

  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).reduce((accumulator, id) => {
        accumulator.push({ id, amount: state[id] });

        return accumulator;
      }, []);
    },
    selectAmountById: (state, id) => state[id],
  },
});

export const { selectCartItems, selectAmountById } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;
