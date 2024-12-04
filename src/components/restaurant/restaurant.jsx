import { useContext } from "react";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import styles from "./restaurant.module.css";
import { UserContext } from "../user-context";

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews, name } = restaurant;
  const { user } = useContext(UserContext);

  return (
    <>
      <div className={styles.restaurant}>
        <h2 className={styles.restaurantTitle}>{name}</h2>
        <Menu menu={menu} />
        {reviews.length && <Reviews reviews={reviews} />}
        {user.isAuthorized && <ReviewForm />}
      </div>
    </>
  );
};
