import { ReviewContainer } from "../review/review-container";
import styles from "./reviews.module.css";

export const Reviews = ({ reviewIds }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviewsTitle}>Отзывы</h3>
      <div className={styles.reviewsList}>
        {reviewIds.map((id) => (
          <ReviewContainer key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
