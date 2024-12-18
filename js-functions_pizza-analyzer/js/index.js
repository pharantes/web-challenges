console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1;
  let pizzaSize2;
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;

  updatePizzaDisplay(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1;
  let pizzaSize2;
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;

  updatePizzaDisplay(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
const calculatePizzaGain = (diameter1, diameter2) => {
  let radius1 = diameter1 / 2;
  let radius2 = diameter2 / 2;
  let area1 = radius1 * radius1 * Math.PI;
  let area2 = radius2 * radius2 * Math.PI;

  return Math.round(((area2 - area1) / area1) * 100);
};

calculatePizzaGain(pizzaSize1, pizzaSize2);
// Task 2
// define the function updatePizzaDisplay here
const updatePizzaDisplay = (pizzaElement, newSize) => {
  pizzaElement.style.width = newSize + "px";
};
// Task 3
// define the function updateOutputColor here
const updateOutputColor = (size1, size2) => {
  if (size1 > size2) {
    outputSection.style.backgroundColor = `var(--red)`;
  } else if (size2 > size1) {
    outputSection.style.backgroundColor = `var(--green)`;
  }
};
