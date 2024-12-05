import { useSelector } from "react-redux";
import { Dish } from "./dish";
import { selectDishById } from "../../redux/entities/dishes/dishes-slise";

export const DishContainer = ({ id }) => {
  const dish = useSelector((data) => selectDishById(data, id));

  if (!dish) {
    return;
  }
  return <Dish name={dish.name} id={id} />;
};
