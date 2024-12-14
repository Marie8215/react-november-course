import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";
import { Review } from "./review";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((data) => selectReviewById(data, id));

  if (!review) {
    return;
  }

  const user = useSelector((data) => selectUserById(data, review.userId));

  return (
    <Review
      id={id}
      text={review.text}
      userId={review.userId}
      userName={user?.name}
    />
  );
};
