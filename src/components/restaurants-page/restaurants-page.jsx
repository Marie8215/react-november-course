import { useState } from "react";
import styles from "./restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTabs } from "../restaurant-tabs/retaurant-tabs";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <div className={styles.restaurantsPage}>
      <h1 className={styles.restaurantsPageTitle}>Рестораны</h1>

      <div className={styles.tabNamesList}>
        {restaurantIds.map((restaurantId) => (
          <RestaurantTabs
            key={restaurantId}
            id={restaurantId}
            onClick={setCurrentRestaurantId}
          />
        ))}
      </div>

      {<RestaurantContainer id={currentRestaurantId} />}
    </div>
  );
};
