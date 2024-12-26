import { Menu } from "../menu/menu";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return "Загрузка...";
  }

  if (isError) {
    return "Ошибка";
  }

  if (!data.length) {
    return null;
  }

  return <Menu dishes={data} />;
};
