import { Provider } from "react-redux";
import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "reset-css";
import { store } from "./redux/store";
import { UserContextProvider } from "./components/user-context/user-context";
import { ThemeContextProvider } from "./components/theme-context/theme-context";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
