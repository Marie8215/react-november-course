import { Count } from "../count/count";

export const ReviewCounter = ({ value, onChange }) => {
  const minRating = 1;
  const maxRating = 5;

  const increase = () => {
    if (value < maxRating) {
      onChange(value + 1);
    }
  };

  const decrease = () => {
    if (value > minRating) {
      onChange(value - 1);
    }
  };

  return (
    <Count
      increase={increase}
      decrease={decrease}
      value={value}
      minValue={minRating}
      maxValue={maxRating}
    />
  );
};
