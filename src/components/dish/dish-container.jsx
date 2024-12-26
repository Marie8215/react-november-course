import { Dish } from "./dish";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishContainer = ({ id: dishId }) => {
  const { data: dish, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return "Загрузка...";
  }

  if (isError) {
    return "Ошибка";
  }

  return <Dish name={dish.name} dishId={dishId} />;
};
