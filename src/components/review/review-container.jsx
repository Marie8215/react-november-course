import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";
import { Review } from "./review";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((data) => selectReviewById(data, id));
  const user = useSelector((data) => selectUserById(data, review?.userId));

  const usersRequestStatus = useRequest(getUsers);

  if (usersRequestStatus === "pending") {
    return "Загрузка...";
  }

  if (usersRequestStatus === "rejected") {
    return "Ошибка";
  }

  if (!review) {
    return;
  }

  return (
    <Review
      id={id}
      text={review.text}
      userId={review.userId}
      userName={user?.name}
    />
  );
};
