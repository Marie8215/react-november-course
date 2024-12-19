import { useSelector } from "react-redux";
import { Dish } from "./dish";
import { selectDishById } from "../../redux/entities/dishes/dishes-slise";
import { useRequest } from "../../redux/hooks/use-request";
import { getMenu } from "../../redux/entities/dishes/get-menu";

export const DishContainer = ({ id: dishId }) => {
  const dish = useSelector((data) => selectDishById(data, dishId));

  const requestStatus = useRequest(getMenu);

  if (requestStatus === "pending") {
    return "Загрузка...";
  }

  if (requestStatus === "rejected") {
    return "Ошибка";
  }

  if (!dish) {
    return;
  }
  return <Dish name={dish.name} dishId={dishId} />;
};
