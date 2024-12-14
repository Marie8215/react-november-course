import { useSelector } from "react-redux";
import { Menu } from "../menu/menu";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((data) => selectRestaurantById(data, restaurantId));
  if (!restaurant) {
    return;
  }

  const { menu } = restaurant;

  return <Menu dishIds={menu} />;
};