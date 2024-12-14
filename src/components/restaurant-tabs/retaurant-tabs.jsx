import { useSelector } from "react-redux";
import { Tab } from "../tab/tab";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const RestaurantTabs = ({ id, onClick }) => {
  const restaurant = useSelector((data) => selectRestaurantById(data, id));

  if (!restaurant) {
    return;
  }

  const { name } = restaurant;
  return <Tab id={id} title={name} onClick={onClick} />;
};
