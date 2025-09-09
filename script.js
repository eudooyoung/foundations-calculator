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
 * i) If input is number, then update num1 with current display.
 * ii) If input is NaN, and the previous input is number,
 *   then update operator with input.
 * iii) If input is number and operator has been assigned, then the input after
 *   operator becomes num2.
 */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let input = button.textContent;
    resultContainer.textContent += input;
    let display = resultContainer.textContent;
    if (Number(input) && !operator) {
      num1 = display;
      console.log(`current num1: ${num1}`);
    } else if (!Number(input) && input !== "=" && input !== "C") {
      operator = input;
      console.log(`current operator: ${operator}`);
      resultContainer.textContent = "";
    } else if (Number(input) && operator && num1) {
      num2 = display;
      console.log(`current num2: ${num2}`);
    }
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
