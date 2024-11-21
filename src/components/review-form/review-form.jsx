import { useState } from "react";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setText, clear } = useForm();
  const { name, text } = form;

  return (
    <form>
      <div>
        <span>Имя</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>Текст</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <button onClick={clear}>Очистить</button>
    </form>
  );
};
