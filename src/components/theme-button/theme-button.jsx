import { useTheme } from "../theme-context/use-theme";

export const ThemeButton = () => {
  const { value, setTheme } = useTheme();

  const toggleTheme = () => {
    if (value === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return <button onClick={toggleTheme}>Сменить тему</button>;
};
