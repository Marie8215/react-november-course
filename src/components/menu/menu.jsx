import { Count } from "../count/count";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ name, id }) => (
          <li key={id}>
            {name}
            <Count />
          </li>
        ))}
      </ul>
    </>
  );
};
