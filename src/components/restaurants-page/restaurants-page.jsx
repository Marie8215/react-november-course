import styles from "./restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTabs } from "../restaurant-tabs/retaurant-tabs";
import { Outlet } from "react-router";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === "pending") {
    return "Загрузка...";
  }

  if (requestStatus === "rejected") {
    return "Ошибка";
  }

  return (
    <div className={styles.restaurantsPage}>
      <h1 className={styles.restaurantsPageTitle}>Рестораны</h1>

      <div className={styles.tabNamesList}>
        {restaurantIds.map((restaurantId) => (
          <RestaurantTabs key={restaurantId} id={restaurantId} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
