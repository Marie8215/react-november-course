import { useParams } from "react-router";
import { ReviewsContainer } from "../reviews-container/reviews-container";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
