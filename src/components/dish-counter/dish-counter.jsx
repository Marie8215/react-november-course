import { Count } from "../count/count";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/ui/cart/cart-slice";

const minDishCount = 0;
const maxDishCount = 5;

export const DishCounter = ({ id }) => {
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  const dispatch = useDispatch();

  const amount = useSelector((state) => selectAmountById(state, id)) || 0;

  return (
    <Count
      increase={increase}
      decrease={decrease}
      value={amount}
      minValue={minDishCount}
      maxValue={maxDishCount}
    />
  );
};
