import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Keyboard from "./components/Keyboard";

let numArray = [];
while (numArray.length < 5) {
  let r = Math.floor(Math.random() * 9) + 1;
  if (numArray.indexOf(r) === -1) numArray.push(r);
}

let usedNumbers = [];
let usedOperations = [];

var targetNumber = Math.floor(Math.random() * 40) + 10;

function App() {
  return (
    <>
      <Header></Header>
      <Numbers numbers={numArray} targetNumber={targetNumber}></Numbers>
      <Keyboard></Keyboard>
    </>
  );
}

export default App;
