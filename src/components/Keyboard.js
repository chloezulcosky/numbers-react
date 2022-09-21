import React, { useState } from "react";
import { evaluate } from "mathjs";

const Keyboard = ({ numbers, targetNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(" ");
  const [numFreq, setNumFreq] = useState([1, 1, 1, 1, 1]);
  const [opFreq, setOpFreq] = useState([1, 1, 1, 1, 1, 1]);

  let operations = ["+", "-", "*", "/", "(", ")"];

  const isNum = (input) => {
    return numbers.indexOf(input) > -1;
  };

  const isOperation = (input) => {
    return operations.indexOf(input) > -1;
  };

  const handleNumberClick = (event) => {
    event.preventDefault();
    let tempNumFreq = numFreq;
    tempNumFreq[event.target.id] = 0;
    setNumFreq(tempNumFreq);
    setCurrentGuess(currentGuess + String(event.target.value));
  };

  const handleOperationClick = (event) => {
    event.preventDefault();
    if (event.target.value !== "(" && event.target.value !== ")") {
      let tempOpFreq = opFreq;
      tempOpFreq[event.target.id] = 0;
      setOpFreq(tempOpFreq);
    }
    setCurrentGuess(currentGuess + event.target.value);
  };

  const handleUnClick = (event) => {
    event.preventDefault();
    let deletedChar = currentGuess.substring(currentGuess.length - 1);
    let newGuess = currentGuess.substring(0, currentGuess.length - 1);
    setCurrentGuess(newGuess);

    if (isNum(deletedChar)) {
      let index = numbers.indexOf(deletedChar);
      let tempNumFreq = numFreq;
      tempNumFreq[index] = 1;
      setNumFreq(tempNumFreq);
    }

    if (isOperation(deletedChar)) {
      let index = operations.indexOf(deletedChar);
      let tempOpFreq = opFreq;
      tempOpFreq[index] = 1;
      setOpFreq(tempOpFreq);
    }
  };

  const handleSubmit = () => {
    let allNumbersUsed = numFreq.every((element) => element === 0);
    if (allNumbersUsed === false) {
      alert("Not all numbers used");
      return;
    }
    let neededOperations = opFreq.slice(0, 4);
    let allOpsUsed = neededOperations.every((element) => element === 0);
    if (allOpsUsed === false) {
      alert("Not all operations used");
      return;
    }

    // Check for use of negative numbers
    if (currentGuess[0] === "-") {
      alert("Invalid guess");
      return;
    } else {
      let subtractionIndex = currentGuess.indexOf("-");
      if (
        isOperation(currentGuess[subtractionIndex - 1]) &&
        currentGuess[subtractionIndex - 1] !== ")"
      ) {
        alert("Invalid guess");
        return;
      }
    }

    // Check for adjacent numbers (i.e. no 12 using 1 & 2)
    for (let i = 0; i < numbers.length; i++) {
      let numberIndex = currentGuess.indexOf(numbers[i]);
      if (numberIndex === 0 && isNum(currentGuess[numberIndex + 1])) {
        alert("Must use the numbers provided.");
      } else if (
        numberIndex === currentGuess.length - 1 &&
        isNum(currentGuess[numberIndex - 1])
      ) {
        alert("Must use the numbers provided.");
      } else {
        if (
          isNum(currentGuess[numberIndex - 1]) ||
          isNum(currentGuess[numberIndex + 1])
        ) {
          alert("Must use the numbers provided.");
        }
      }
    }

    try {
      let guessEvaluation = evaluate(currentGuess);
      if (guessEvaluation === targetNumber) {
        alert("You win!");
      } else {
        alert("Guess does not compute: " + guessEvaluation);
      }
    } catch (error) {
      alert("Invalid guess");
    }
  };

  const handleClear = (event) => {
    event.preventDefault();
    setCurrentGuess("");
    setNumFreq([1, 1, 1, 1, 1]);
    setOpFreq([1, 1, 1, 1, 1, 1]);
  };

  return (
    <>
      <div className="currentGuessContainer">
        <p className="currentGuess">{currentGuess}</p>
        <button className="clearButton" onClick={handleClear}>
          X
        </button>
      </div>

      <div className="keyboardLine">
        {numbers.map((number, i) => {
          return (
            <button
              className="numberButton"
              onClick={handleNumberClick}
              key={number}
              id={i}
              value={number}
              disabled={!numFreq[i]}
            >
              {number}
            </button>
          );
        })}
      </div>
      <div className="keyboardLine">
        {operations.map((operation, i) => {
          return (
            <button
              className="numberButton"
              onClick={handleOperationClick}
              key={operation}
              id={i}
              value={operation}
              disabled={!opFreq[i]}
            >
              {operation}
            </button>
          );
        })}
      </div>
      <div className="keyboardLine">
        <button className="actionButton" onClick={handleUnClick}>
          Back
        </button>
        <button className="actionButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Keyboard;
