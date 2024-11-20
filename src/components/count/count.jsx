import { useState } from "react";
import "./count.css";

export const Count = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="count-container">
      <button
        className="count-button"
        onClick={decrease}
        disabled={value === 0}
      >
        -
      </button>
      <p>{value}</p>
      <button
        className="count-button"
        onClick={increase}
        disabled={value === 5}
      >
        +
      </button>
    </div>
  );
};
