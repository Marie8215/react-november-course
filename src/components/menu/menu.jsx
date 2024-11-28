import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3 className={styles.menuHeader}>Меню</h3>
      <ul className={styles.menuList}>
        {menu.map(({ name, id }) => (
          <li 
          className={styles.menuListItem}
          key={id}>
            {name}
            <DishCounter />
          </li>
        ))}
      </ul>
    </div>
  );
};
