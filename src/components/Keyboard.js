import React from "react";

const Keyboard = () => {
  var guess = "2 + 5";
  return (
    <>
      <h3>{guess}</h3>
      <div class="keyboardLine">
        <button>b1</button>
        <button>b2</button>
        <button>b3</button>
        <button>b4</button>
        <button>b5</button>
      </div>
      <div class="keyboardLine">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>(</button>
        <button>)</button>
      </div>
    </>
  );
};

export default Keyboard;
