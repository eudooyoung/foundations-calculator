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

const operators = ["+", "-", "×", "÷"];
let num1;
let num2;
let operator;
/**
 * i) Populate the display with input values.
 * ii)
 */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let input = button.textContent;
    resultContainer.textContent += input;
    let display = resultContainer.textContent;
    let arr = display.split("");
    let operatorIdx = arr.findIndex((item) => operators.includes(item));
    let secondIdx = arr.findLastIndex((item) => operators.includes(item));

    if (input === "=") {
      num1 = Number(display.slice(0, operatorIdx));
      operator = display.at(operatorIdx);
      num2 = Number(display.slice(operatorIdx + 1, -1));
      resultContainer.textContent = operate(num1, num2, operator);
    } else if (operators.includes(input)) {
      let arr = display.split("");
      arr.findIndex((item) => operators.includes(item));
    }
  });
});

clearButton.addEventListener("click", () => {
  clear();
});
