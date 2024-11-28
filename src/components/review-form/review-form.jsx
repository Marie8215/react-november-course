import { useForm } from "./use-form";
import { Count } from "../count/count";
import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const { form, setName, setText, increaseRating, decreaseRating, clear } =
    useForm();
  const { name, text, rating } = form;

  return (
    <div className={styles.reviewForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <h3>Имя</h3>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <h3>Текст</h3>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <span>
          <Count
            increase={increaseRating}
            decrease={decreaseRating}
            value={rating.currentValue}
            minValue={rating.minValue}
            maxValue={rating.maxValue}
          />
        </span>
        <button
          onClick={(event) => {
            event.preventDefault();
            clear();
          }}
        >
          Очистить
        </button>
      </form>
    </div>
  );
};
