import { useContext } from "react";
import { DishCounter } from "../dish-counter/dish-counter";
import styles from "./menu.module.css";
import { UserContext } from "../user-context";

export const Menu = ({ menu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3 className={styles.menuHeader}>Меню</h3>
      <ul className={styles.menuList}>
        {menu.map(({ name, id }) => (
          <li className={styles.menuListItem} key={id}>
            {name}
            {user.isAuthorized && <DishCounter />}
          </li>
        ))}
      </ul>
    </div>
  );
};
