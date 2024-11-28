import { DishCounter } from "../dish-counter/dish-counter";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ name, id }) => (
          <li key={id}>
            {name}
            <DishCounter />
          </li>
        ))}
      </ul>
    </>
  );
};
