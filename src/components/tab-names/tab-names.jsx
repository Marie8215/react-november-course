import styles from "./tab-names.module.css";

export const TabNames = ({ tabNames, onClick }) => {
  return (
    <>
      <ul className={styles.tabNamesList}>
        {tabNames.map((name, index) => (
          <li key={index}>
            <button className={styles.tabNamesButton} onClick={() => onClick(index)}>{name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
