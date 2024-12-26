import styles from "./menu.module.css";
import { Dish } from "../dish/dish";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3 className={styles.menuHeader}>Меню</h3>
      <div className={styles.menuList}>
        {dishes.map((dish) => (
          <Dish name={dish.name} dishId={dish.id} />
        ))}
      </div>
    </div>
  );
};
