import { Provider } from "react-redux";
import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "reset-css";
import { store } from "./redux/store";
import { UserContextProvider } from "./components/user-context/user-context";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { RouterProvider, createBrowserRouter } from "react-router";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { MenuPage } from "./components/menu-page/menu-page";
import { ReviewsPage } from "./components/reviews-page/reviews-page";
import { Homepage } from "./components/homepage/homepage";
import { DishPage } from "./components/dish-page/dish-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantsPage />,
    children: [
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantPage />,
        children: [
          {
            path: "/restaurants/:restaurantId/menu",
            element: <MenuPage />,
          },
          {
            path: "/restaurants/:restaurantId/reviews",
            element: <ReviewsPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  { 
    path: "dish/:dishId", 
    element: <DishPage /> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
