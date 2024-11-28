import { useState } from "react";
import "./count.css";

export const Count = ({ decrease, increase, value, minValue, maxValue }) => {
  return (
    <div className="count-container">
      <button
        className="count-button"
        onClick={(event) => {
          decrease();
        }}
        disabled={value === minValue}
      >
        -
      </button>
      <p>{value}</p>
      <button
        className="count-button"
        onClick={(event) => {
          increase();
        }}
        disabled={value === maxValue}
      >
        +
      </button>
    </div>
  );
};
