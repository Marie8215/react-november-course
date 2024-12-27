import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../review-form/review-form";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useContext } from "react";
import { UserContext } from "../user-context";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data, isLoading, isError } =
    useGetReviewsByRestaurantIdQuery(restaurantId);
  useGetUsersQuery();

  const [addReview] = useAddReviewMutation();

  const { user } = useContext(UserContext);

  const createNewReview = (review) => {
    let newReview = {
      restaurantId,
      review,
    };

    addReview(newReview);
  };

  if (isLoading) {
    return "Загрузка...";
  }

  if (isError) {
    return "Ошибка";
  }

  if (!data.length) {
    return null;
  }

  return (
    <>
      {data.length && <Reviews reviews={data} />}
      {user.isAuthorized && <ReviewForm onSubmit={createNewReview} />}
    </>
  );
};
