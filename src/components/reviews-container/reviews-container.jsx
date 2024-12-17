import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Reviews } from "../reviews/reviews";
import { useContext } from "react";
import { UserContext } from "../user-context";
import { ReviewForm } from "../review-form/review-form";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((data) =>
    selectRestaurantById(data, restaurantId)
  );

  const {user} = useContext(UserContext)

  if (!restaurant) {
    return;
  }

  const { reviews } = restaurant;

  return (
    <>
      {reviews.length && <Reviews reviewIds={reviews} />}
      {user.isAuthorized && <ReviewForm />}
    </>
  );
};
