import { useForm } from "./use-form";
import { Count } from "../count/count";
import styles from "./review-form.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Button } from "../button/button";
import { useContext } from "react";
import { UserContext } from "../user-context";

export const ReviewForm = ({ onSubmit }) => {
  const { form, setText, increaseRating, decreaseRating, clear } = useForm();
  const { text, rating } = form;

  const { value } = useTheme();
  const { user } = useContext(UserContext);

  return (
    <div className={styles.reviewForm}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
        <Button
          className={classNames(styles.reviewFormButton, {
            [styles.light]: value === "light",
          })}
          onClick={() => {
            onSubmit({ text, rating, userId: user.userData.id });
            clear();
          }}
        >
          Добавить
        </Button>
      </form>
    </div>
  );
};
