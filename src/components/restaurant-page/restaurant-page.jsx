import { Outlet, useParams } from "react-router";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </>
  );
};
