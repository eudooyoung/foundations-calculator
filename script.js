function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  resultContainer.textContent = "";
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "×":
      return multiply(num1, num2);
      break;
    case "÷":
      return divide(num1, num2);
      break;
    default:
      return "An invalid operator provided.";
      break;
  }
}

const calculatorContainer = document.querySelector(".calculator-container");
const resultContainer = document.querySelector(".result-container");
const buttons = document.querySelectorAll("button");
const clearButton = document.querySelector(".operator.clear");

let num1;
let num2;
let operator;
/**
 * i) Populate the display with input values.
 * ii) If an operator is provided, store the current display in num1 and
 *    input in operator.
 */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let input = button.textContent;
    // input = Number(input) || Number(input) === 0 ? Number(input) : input;
    resultContainer.textContent += input;
    let display = resultContainer.textContent;

    if (input === "=") {
      let arr = display.split("");
      let operatorIdx = arr.findIndex((item) => !Number(item));
      num1 = Number(display.slice(0, operatorIdx));
      operator = display.at(operatorIdx);
      num2 = Number(display.slice(operatorIdx + 1, -1));
      resultContainer.textContent = operate(num1, num2, operator);
    }
  });
});

clearButton.addEventListener("click", () => {
  clear();
});
