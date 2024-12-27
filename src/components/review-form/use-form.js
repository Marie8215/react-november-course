import { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_TEXT":
      return { ...state, text: payload };
    case "INCREASE_RATING": {
      const newState = { ...state };
      newState.rating.currentValue += 1;
      return newState;
    }
    case "DECREASE_RATING": {
      const newValue = { ...state };
      newValue.rating.currentValue -= 1;
      return newValue;
    }
    case "CLEAR_FORM":
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: {
    minValue: 1,
    maxValue: 5,
    currentValue: 1,
  },
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setText = (text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  };

  const increaseRating = () => {
    dispatch({ type: "INCREASE_RATING" });
  };

  const decreaseRating = () => {
    dispatch({ type: "DECREASE_RATING" });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_FORM" });
  };

  return {
    form,
    setText,
    increaseRating,
    decreaseRating,
    clear,
  };
};
