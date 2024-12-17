console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
let sum;
let subtraction;
let multiplication;
let division;
let exponent;
let modulo;

addButton.addEventListener("click", () => {
  sum = operand1 + operand2;
});
subtractButton.addEventListener("click", () => {
  subtraction = operand1 - operand2;
});
multiplyButton.addEventListener("click", () => {
  multiplication = operand1 * operand2;
});
divideButton.addEventListener("click", () => {
  division = operand1 / operand2;
});
exponentButton.addEventListener("click", () => {
  exponent = operand1 ** operand2;
});
moduloButton.addEventListener("click", () => {
  modulo = operand1 % operand2;
});
console.log("sum", sum);
console.log("subtraction", subtraction);
console.log("multiplication", multiplication);
console.log("division", division);
console.log("exponent", exponent);
console.log("modulo", modulo);
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const add1Button = document.querySelector('[data-js="increase-by-one"]');
const add5Button = document.querySelector('[data-js="increase-by-five"]');
const subtract1Button = document.querySelector('[data-js="decrease-by-one"]');
const subtract5Button = document.querySelector('[data-js="decrease-by-five"]');
const multiply2Button = document.querySelector('[data-js="multiply-by-two"]');
const divide2Button = document.querySelector('[data-js="divide-by-tw"]');

add1Button.addEventListener("click", () => {
  operand1++;
});
add5Button.addEventListener("click", () => {
  operand1 = operand1 + 5;
});
subtract1Button.addEventListener("click", () => {
  operand1--;
});
subtract5Button.addEventListener("click", () => {
  operand1 = operand1 - 5;
});
multiply2Button.addEventListener("click", () => {
  operand1 = operand1 * 2;
});
divide2Button.addEventListener("click", () => {
  operand1 = operand1 / 2;
});
// --^-- write your code here --^--
