import { Button } from "../button/button";
import styles from "./tab.module.css";

export const Tab = ({ onClick, title, id }) => {
  return (
    <Button
      key={id}
      className={styles.tabNamesButton}
      onClick={() => onClick(id)}
    >
      {title}
    </Button>
  );
};
