import { NavLink } from "react-router";
import { Tab } from "../tab/tab";

export const RestaurantTab = ({ title, id }) => {
  return (
    <NavLink to={`/restaurants/${id}`}>
      <Tab title={title} id={id}></Tab>
    </NavLink>
  );
};
