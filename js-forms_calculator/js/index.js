console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
// const resultOutput = document.querySelector('[data-js="result"]');
// const resultOutput = document.querySelector('[data-js="result"]');
// const resultOutput = document.querySelector('[data-js="result"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data.operator);
  let result;
  let operator = data.operator;
  let numA = parseInt(data.numberA);
  let numB = parseInt(data.numberB);

  // --v-- write your code here --v--
  switch (operator) {
    case "addition":
      result = add(numA, numB)
      break;
    case "subtraction":
      result = subtract(numA, numB)
      break;
    case "multiplication":
      result = multiply(numA, numB)
      break;
    case "division":
      result = divide(numA, numB)
      break;
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
