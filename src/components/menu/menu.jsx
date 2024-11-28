import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ name, id }) => (
          <li key={id}>
            {name}
            <DishCounter />
          </li>
        ))}
      </ul>
    </div>
  );
};
