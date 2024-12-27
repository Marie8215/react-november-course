import { Review } from "./review";
import { useGetUsersQuery } from "../../redux/services/api";

export const ReviewContainer = ({ review }) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.currentData?.find((user) => user.id === review.userId),
    }),
  });

  if (isLoading) {
    return "Загрузка...";
  }

  if (isError) {
    return "Ошибка";
  }

  if (!review) {
    return;
  }

  return (
    <Review
      id={review.id}
      text={review.text}
      userId={user.id}
      userName={user.name}
    />
  );
};
