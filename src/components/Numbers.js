import React from "react";
import "../App.css";

const Numbers = ({ numbers, targetNumber }) => {
  return (
    <div className="numberContainer">
      {numbers.map((number) => {
        return (
          <div className="startingNumberContainer" key={number}>
            <div className="startingNumber" key={number}>
              {number}
            </div>
          </div>
        );
      })}
      <div className="targetNumber">{targetNumber}</div>
    </div>
  );
};

export default Numbers;
