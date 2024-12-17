import { ProgressBar } from "../progress-bar/progress-bar";
import { Header } from "../header/header";
import { Cart } from "../cart/cart";
import { UserContext } from "../user-context";
import { useContext } from "react";


export const Layout = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <ProgressBar />
      {children}
      {user.isAuthorized && <Cart />}
      <footer></footer>
    </>
  );
};
