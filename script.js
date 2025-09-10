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
  return b !== 0 ? a / b : "0 cannot be a denominator.";
}

function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  operatorCount = 0;
  result = "";
  resultContainer.textContent = "";
  dotButton.disabled = false;
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
    case "*":
      return multiply(num1, num2);
      break;
    case "÷":
    case "/":
      return divide(num1, num2);
      break;
    default:
      return "An invalid operator provided.";
      break;
  }
}

function extract(display) {
  let arr = display.split("");
  let operatorIdx = arr.findIndex((item) => operators.includes(item));
  num1 = Number(display.slice(0, operatorIdx));
  operator = display.at(operatorIdx);
  num2 = Number(display.slice(operatorIdx + 1, -1));
}

function extractKeyboard(display) {
  let arr = display.split("");
  let operatorIdx = arr.findIndex((item) => operators.includes(item));
  num1 = Number(display.slice(0, operatorIdx));
  operator = display.at(operatorIdx);
  num2 = Number(display.slice(operatorIdx + 1, -5));
}

const calculatorContainer = document.querySelector(".calculator-container");
const resultContainer = document.querySelector(".result-container");
const buttons = document.querySelectorAll("button");
const clearButton = document.querySelector(".operator.clear");
const dotButton = document.querySelector(".num.dot");

const operators = ["+", "-", "×", "÷", "*", "/"];
const validKeys = ["Enter", "Escape", "Backspace"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let operatorCount = 0;
let num1;
let num2;
let operator;
let input = "";
let result;
/**
 * i) Populate the display with input values.
 * ii) Extract variables from display by converting the string an array.
 */

// mouse eventListener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (result) clear();

    input = button.textContent;
    if (operators.includes(input)) {
      operatorCount++;
      dotButton.disabled = false;
    }

    resultContainer.textContent += input;
    let display = resultContainer.textContent;

    if (input === "=") {
      // when execution button clicked
      dotButton.disabled = false;
      extract(display);
      result = operate(num1, num2, operator);
      resultContainer.textContent = result;
    } else if (operators.includes(input) && operatorCount > 1) {
      // when operator buttons are clicked consecutively
      extract(display);
      let nextOperator = display.slice(-1);
      resultContainer.textContent =
        operate(num1, num2, operator) + nextOperator;
      operatorCount = 1;
    }

    if (input === "back") {
      // when backspace button clicked
      let toRemove = display.slice(-5);
      if (toRemove.includes(".")) dotButton.disabled = false;
      display = display.replace(toRemove, "");
      resultContainer.textContent = display;
    }
  });
});

// keyboard eventListener
document.addEventListener("keydown", (e) => {
  if (result) clear();

  let input = e.key;
  if (operators.includes(input)) {
    operatorCount++;
    dotButton.disabled = false;
  }

  if (input === "." && dotButton.disabled) input = "";
  if (input === "Shift") input = "";
  if (
    !numbers.includes(input) &&
    !validKeys.includes(input) &&
    !operators.includes(input)
  ) {
    input = "";
  }

  resultContainer.textContent += input;
  let display = resultContainer.textContent;

  if (input === "Enter") {
    // when enter key is pressed
    dotButton.disabled = false;
    extractKeyboard(display);
    result = operate(num1, num2, operator);
    resultContainer.textContent = result;
  } else if (operators.includes(input) && operatorCount > 1) {
    // when operator buttons are pressed consecutively
    extract(display);
    let nextOperator = display.slice(-1);
    resultContainer.textContent = operate(num1, num2, operator) + nextOperator;
    operatorCount = 1;
  }

  if (input === "Backspace") {
    // when backspace key is pressed
    let toRemove = display.slice(-10);
    if (toRemove.includes(".")) dotButton.disabled = false;
    display = display.replace(toRemove, "");
    resultContainer.textContent = display;
  }
});

clearButton.addEventListener("click", () => clear());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") clear();
});

dotButton.addEventListener("click", () => (dotButton.disabled = true));
document.addEventListener("keydown", (e) => {
  if (e.key === ".") dotButton.disabled = true;
});
