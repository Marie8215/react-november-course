import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((data) => selectRestaurantById(data, id));
  if (!restaurant) {
    return;
  }

  return <Restaurant restaurant={restaurant} />;
};
