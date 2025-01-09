console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorParagraph = document.querySelector(".error");
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        return error;
      } else return a / b;
    } catch (error) {
      errorParagraph.innerHTML = "Can't divide by 0";
      return a / b;
    }
  },
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
