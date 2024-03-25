import "./style.css";
import { useState } from "react";

const App = () => {
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [Operator, setOperator] = useState("");

  const handleNumberClick = (value) => {
    setCurrentOperand(currentOperand + value);
  };

  const handleOperatorClick = (value) => {
    if (currentOperand === "") return;

    if (previousOperand !== "") {
      Calculate();
    } else {
      setPreviousOperand(currentOperand);
    }
    setOperator(value);
    setCurrentOperand("");
  };

  const handleEqualClick = () => {
    if (previousOperand === "" || currentOperand === "") return;
    Calculate();
    setOperator("");
    setPreviousOperand("");
  };

  const Calculate = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (Operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(result.toString());
  };

  const handleDelete = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const handleClearButton = () => {
    setPreviousOperand("");
    setCurrentOperand("");
    setOperator("");
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {Operator}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={() => handleClearButton()}>
        AC
      </button>
      <button onClick={() => handleDelete()}>DEL</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleNumberClick(".")}>.</button>
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button className="span-two" onClick={() => handleEqualClick()}>
        =
      </button>
    </div>
  );
};

export default App;
