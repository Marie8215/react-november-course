import styles from "./restaurants-page.module.css";
import { Outlet } from "react-router";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "Загрузка...";
  }

  if (isError) {
    return "Ошибка";
  }

  return (
    <div className={styles.restaurantsPage}>
      <h1 className={styles.restaurantsPageTitle}>Рестораны</h1>

      <div className={styles.tabNamesList}>
        {data.map((restaurant) => (
          <RestaurantTab
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.name}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
