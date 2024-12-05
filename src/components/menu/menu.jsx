import styles from "./menu.module.css";
import { DishContainer } from "../dish/dish-container";

export const Menu = ({ dishIds }) => {
  return (
    <div>
      <h3 className={styles.menuHeader}>Меню</h3>
      <div className={styles.menuList}>
        {dishIds.map((dishId) => (
          <DishContainer id={dishId} />
        ))}
      </div>
    </div>
  );
};
