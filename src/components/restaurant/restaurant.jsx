import styles from "./restaurant.module.css";
import { NavLink } from "react-router";

export const Restaurant = ({ restaurant }) => {
  const { name } = restaurant;
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.restaurantTitle}>{name}</h2>

      <NavLink to="menu">Меню</NavLink>
      <NavLink to="reviews">Отзывы</NavLink>
    </div>
  );
};
