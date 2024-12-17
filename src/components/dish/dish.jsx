import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./dish.module.css";
import { useContext } from "react";
import { UserContext } from "../user-context";
import { Link } from "react-router";

export const Dish = ({ name, id }) => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.dish}>
      <Link to={`/dish/${id}`}> {name} </Link>
      {user.isAuthorized && <DishCounter id={id} />}
    </div>
  );
};
