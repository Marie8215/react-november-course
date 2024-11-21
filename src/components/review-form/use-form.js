import { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload, text: "" };
    case "SET_TEXT":
      return { ...state, text: payload };
    case "CLEAR_FORM":
      return { name: "", text: "" };
    default:
      return state;
  }
};

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text } = form;

  const setName = (name) => {
    dispatch({ type: "SET_NAME", payload: name });
  };

  const setText = (text) => {
    dispatch({ type: "SET_TEXT", payload: text });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_FORM" });
  };

  return {
    form,
    setName,
    setText,
    clear,
  };
};
