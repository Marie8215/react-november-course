import { createContext, useState } from "react";
import { ProgressBar } from "../progress-bar/progress-bar";
import { Header } from "../header/header";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";

export const AuthContext = createContext();

export const Layout = ({ children }) => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Header />
        <ProgressBar />
        {children}
        <footer></footer>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
