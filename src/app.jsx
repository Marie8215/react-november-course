import { Provider } from "react-redux";
import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "reset-css";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </Provider>
  );
};
