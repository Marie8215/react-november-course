import { restaurants } from "../../constants/moke";
import { Restaurant } from "../restaurant/restaurant";
import { Tabs } from "../tabs/tabs";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  return (
    <div className={styles.restaurantsPage}>
      <h1>Рестораны</h1>

      <Tabs tabNames={restaurants.map((restaurant) => restaurant.name)}>
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </Tabs>
    </div>
  );
};
