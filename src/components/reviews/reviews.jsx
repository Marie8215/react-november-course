import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ user, text, id }) => (
          <li key={id}>
            <strong>{user}</strong>: {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
