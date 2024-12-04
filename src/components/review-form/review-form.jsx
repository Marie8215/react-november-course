import { useForm } from "./use-form";
import { Count } from "../count/count";
import styles from "./review-form.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Button } from "../button/button";

export const ReviewForm = () => {
  const { form, setName, setText, increaseRating, decreaseRating, clear } =
    useForm();
  const { name, text, rating } = form;

  const { value } = useTheme();

  return (
    <div className={styles.reviewForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <h3 className={styles.reviewFormTitle}>Имя</h3>
          <input
            className={styles.reviewForm}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <h3 className={styles.reviewFormTitle}>Текст</h3>
          <input
            className={styles.reviewFormInput}
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <span className={styles.reviewFormSpan}>
          <Count
            increase={increaseRating}
            decrease={decreaseRating}
            value={rating.currentValue}
            minValue={rating.minValue}
            maxValue={rating.maxValue}
          />
        </span>
        <Button
          className={classNames(styles.reviewFormButton, {
            [styles.light]: value === "light",
          })}
          onClick={(event) => {
            event.preventDefault();
            clear();
          }}
        >
          Очистить
        </Button>
      </form>
    </div>
  );
};
