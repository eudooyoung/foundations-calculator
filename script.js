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
  resultContainer.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
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
const executeButton = document.querySelector(".operator.execute");

let num1;
let num2;
let operator;
/**
 * i) Check if an input is numeric.
 * ii) Populate the display with input.
 *
 */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let input = button.textContent;
    input = Number(input) || Number(input) === 0 ? Number(input) : input;
    resultContainer.textContent += input;
    let display = resultContainer.textContent;
  });
});

clearButton.addEventListener("click", () => {
  clear();
});

executeButton.addEventListener("click", () => {
  if (operator) {
    let result = operate(Number(num1), Number(num2), operator);
    console.log(result);
    resultContainer.textContent = result;
  }
});
