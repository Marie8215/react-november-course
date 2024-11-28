import styles from "./count.module.css"

export const Count = ({ decrease, increase, value, minValue, maxValue }) => {
  return (
    <div className={styles.count}>
      <button
        className={styles.countButton}
        onClick={() => {
          decrease();
        }}
        disabled={value === minValue}
      >
        -
      </button>
      <p>{value}</p>
      <button
        className={styles.countButton}
        onClick={() => {
          increase();
        }}
        disabled={value === maxValue}
      >
        +
      </button>
    </div>
  );
};
