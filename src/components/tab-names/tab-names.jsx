import { Button } from "../button/button";
import styles from "./tab-names.module.css";

export const TabNames = ({ tabNames, onClick }) => {
  return (
    <>
      <ul className={styles.tabNamesList}>
        {tabNames.map((name, index) => (
          <li key={index}>
            <Button
              className={styles.tabNamesButton}
              onClick={() => onClick(index)}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
