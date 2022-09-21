import "./App.css";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Keyboard from "./components/Keyboard";

let numArray = [];
while (numArray.length < 5) {
  let r = Math.floor(Math.random() * 9) + 1;
  if (numArray.indexOf(r) === -1) numArray.push(r);
}

var targetNumber = Math.floor(Math.random() * 40) + 10;

function App() {
  return (
    <div className="outerContainer">
      <Header></Header>
      <Numbers
        numbers={numArray.map(String)}
        targetNumber={targetNumber}
      ></Numbers>
      <Keyboard
        numbers={numArray.map(String)}
        targetNumber={targetNumber}
      ></Keyboard>
    </div>
  );
}

export default App;
