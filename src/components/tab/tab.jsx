import { Button } from "../button/button";
import styles from "./tab.module.css";

export const Tab = ({ title, id }) => {
  return (
    <Button
      key={id}
      className={styles.tabNamesButton}
    >
      {title}
    </Button>
  );
};
