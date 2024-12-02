import { ThemeButton } from "../theme-button/theme-button";
import styles from "./header.module.css";
import { User } from "../../constants/Users";
import { Button } from "../button/button";
import { useContext } from "react";
import { UserContext } from "../user-context";

export const Header = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <ThemeButton />
      <div>
        {user.isAuthorized && (
          <>
            <div>{user.userData.name}</div>
            <Button onClick={logout}>Выйти</Button>
          </>
        )}
        {!user.isAuthorized && (
          <Button onClick={() => login(User)}>Войти</Button>
        )}
      </div>
    </header>
  );
};
