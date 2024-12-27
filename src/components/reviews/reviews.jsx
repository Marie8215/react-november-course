import { ReviewContainer } from "../review/review-container";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviewsTitle}>Отзывы</h3>
      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <ReviewContainer key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
