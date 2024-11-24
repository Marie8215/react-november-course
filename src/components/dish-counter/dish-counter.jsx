import { useState } from "react";
import { Count } from "../count/count";

export const DishCounter = () => {
  const [value, setValue] = useState(0);
  const minDishCount = 0;
  const maxDishCount = 5;

  const increase = () => {
    if (value < maxDishCount) {
      setValue(value + 1);
    }
  };

  const decrease = () => {
    if (value > minDishCount) {
      setValue(value - 1);
    }
  };

  return (
    <Count
      increase={increase}
      decrease={decrease}
      value={value}
      minValue={minDishCount}
      maxValue={maxDishCount}
    />
  );
};
