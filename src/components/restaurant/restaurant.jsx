import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews, name } = restaurant;

  return (
    <>
      <div className={styles.restaurant}>
        <h2>{name}</h2>
        <Menu menu={menu} />
        {reviews.length && <Reviews reviews={reviews} />}
        <ReviewForm />
      </div>
    </>
  );
};
