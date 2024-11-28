import styles from "./tab-names.module.css";

export const TabNames = ({ tabNames, onClick }) => {
  return (
    <>
      <ul className={styles.tabNames}>
        {tabNames.map((name, index) => (
          <li key={index}>
            <button onClick={() => onClick(index)}>{name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
