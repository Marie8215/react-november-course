import { useState } from "react";
import { useForm } from "./use-form";
import { ReviewCounter } from "../review-counter/review-counter";

export const ReviewForm = () => {
  const { form, setName, setText, setRating, clear } = useForm();
  const { name, text, rating } = form;

  return (
    <>
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
        <ReviewCounter value={rating} onChange={(value) => setRating(value)} />
        <button
          onClick={(event) => {
            event.preventDefault();
            clear();
          }}
        >
          Очистить
        </button>
      </form>
    </>
  );
};
