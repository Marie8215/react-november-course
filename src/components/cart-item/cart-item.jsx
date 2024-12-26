import { DishCounter } from "../dish-counter/dish-counter";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const CartItem = ({ id }) => {
  const { data } = useGetDishByIdQuery(id);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.name}
      <DishCounter id={id} />
    </>
  );
};
