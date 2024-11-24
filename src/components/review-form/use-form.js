import { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload, text: "" };
    case "SET_TEXT":
      return { ...state, text: payload };
    case "SET_RATING":
      return { ...state, rating: payload };
    case "CLEAR_FORM":
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, rating } = form;

  const setName = (name) => {
    dispatch({ type: "SET_NAME", payload: name });
  };

  const setText = (text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  };

  const setRating = (rating) => {
    dispatch({ type: "SET_RATING", payload: rating });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_FORM" });
  };

  return {
    form,
    setName,
    setText,
    setRating,
    clear,
  };
};
