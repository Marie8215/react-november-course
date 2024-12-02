import { useState } from "react";
import { UserContext } from ".";

const emptyUser = {
  isAuthorized: false,
  userData: undefined, // {}
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(emptyUser);

  const logout = () => {
    setUser(emptyUser);
  };

  const login = (user) => {
    setUser({ isAuthorized: true, userData: user });
  };

  return (
    <UserContext.Provider value={{ user, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};
