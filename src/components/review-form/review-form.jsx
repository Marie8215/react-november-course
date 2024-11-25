import { useForm } from "./use-form";
import { Count } from "../count/count"

export const ReviewForm = () => {
  const { form, setName, setText, increaseRating, decreaseRating, clear } =
    useForm();
  const { name, text, rating } = form;

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
        <Count
          increase={increaseRating}
          decrease={decreaseRating}
          value={rating.currentValue}
          minValue={rating.minValue}
          maxValue={rating.maxValue}
        />
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
