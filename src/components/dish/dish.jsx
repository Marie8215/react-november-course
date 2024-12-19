import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./dish.module.css";
import { useContext } from "react";
import { UserContext } from "../user-context";
import { Link } from "react-router";

export const Dish = ({ name, dishId }) => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.dish}>
      <Link to={`/dish/${dishId}`}> {name} </Link>
      {user.isAuthorized && <DishCounter id={dishId} />}
    </div>
  );
};
