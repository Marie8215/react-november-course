import { restaurants } from "../../constants/moke";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../tabs/tabs";

export const RestaurantsPage = () => {
  return (
    <>
      <h1>Рестораны</h1>

      <Tabs tabNames={restaurants.map((restaurant) => restaurant.name)}>
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </Tabs>
    </>
  );
};
