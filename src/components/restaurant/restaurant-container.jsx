import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.currentData?.find((restaurant) => restaurant.id === id),
    }),
  });

  return <Restaurant restaurant={restaurant} />;
};
