import { restaurants } from "../../constants/moke";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsPage = () => {
  return (
    <>
      <h1>Рестораны</h1>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </>
  );
};
