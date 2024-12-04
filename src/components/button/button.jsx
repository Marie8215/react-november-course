import classNames from "classnames";
import styles from "./button.module.css";
import { useTheme } from "../theme-context/use-theme";

export const Button = ({ children, onClick, className, disabled }) => {
  const { value } = useTheme();
  return (
    <button
      className={classNames(
        {
          [styles.buttonDark]: value === "dark",
          [styles.buttonLight]: value === "light",
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
