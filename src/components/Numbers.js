import React from "react";
import "../App.css";

const Numbers = ({ numbers, targetNumber }) => {
  return (
    <>
      {numbers.map((number, i) => {
        return (
          <div className="numberContainer">
            <div className="startingNumber" key={i}>
              {number}
            </div>
          </div>
        );
      })}
      <div className="numberContainer">
        <div className="targetNumber">{targetNumber}</div>
      </div>
    </>
  );
};

export default Numbers;
