console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorParagraph = document.querySelector(".error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Can't divide by 0");
    } else return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.innerText = "";
  errorParagraph.innerText = "";

  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch (error) {
    errorParagraph.innerText = error.message;
  }
});
