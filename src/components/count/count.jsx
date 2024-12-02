import { Button } from "../button/button";
import styles from "./count.module.css";

export const Count = ({ decrease, increase, value, minValue, maxValue }) => {
  return (
    <div className={styles.count}>
      <Button
        className={styles.countButton}
        onClick={() => {
          decrease();
        }}
        disabled={value === minValue}
      >
        -
      </Button>
      <p>{value}</p>
      <Button
        className={styles.countButton}
        onClick={() => {
          increase();
        }}
        disabled={value === maxValue}
      >
        +
      </Button>
    </div>
  );
};
