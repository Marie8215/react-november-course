import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slise";
import { DishCounter } from "../dish-counter/dish-counter";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish.name) {
    return null;
  }

  return (
    <>
      {dish.name}
      <DishCounter id={id} />
    </>
  );
};
