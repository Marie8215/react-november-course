import { restaurants } from "../../constants/moke";
import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import { Tab } from "../tab/tab";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const [selectedRestaurantIndex, setselectedRestaurantIndex] = useState(0);

  return (
    <div className={styles.restaurantsPage}>
      <h1 className={styles.restaurantsPageTitle}>Рестораны</h1>

      <div className={styles.tabNamesList}>
        {restaurants.map((restaurant, idx) => (
          <Tab
            title={restaurant.name}
            key={idx}
            id={idx}
            onClick={setselectedRestaurantIndex}
          />
        ))}
      </div>

      {<Restaurant restaurant={restaurants[selectedRestaurantIndex]} />}
    </div>
  );
};
