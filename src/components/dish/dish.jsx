import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./dish.module.css";
import { useContext } from "react";
import { UserContext } from "../user-context";

export const Dish = ({ name, id }) => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.dish}>
      {name}
      {user.isAuthorized && <DishCounter id={id} />}
    </div>
  );
};
