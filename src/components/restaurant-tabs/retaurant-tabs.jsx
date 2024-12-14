import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantTabs = ({ id }) => {
  const restaurant = useSelector((data) => selectRestaurantById(data, id));

  if (!restaurant) {
    return;
  }

  const { name } = restaurant;
  return <RestaurantTab id={id} title={name} />;
};
