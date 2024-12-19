import { useSelector } from "react-redux";
import { Menu } from "../menu/menu";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getMenu } from "../../redux/entities/dishes/get-menu";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((data) =>
    selectRestaurantById(data, restaurantId)
  );

  const requestStatus = useRequest(getMenu);

  if (requestStatus === "pending") {
    return "Загрузка...";
  }

  if (requestStatus === "rejected") {
    return "Ошибка";
  }

  if (!restaurant) {
    return;
  }

  const { menu } = restaurant;

  return <Menu dishIds={menu} />;
};
