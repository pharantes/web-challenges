console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  let toastItem = document.createElement("li");
  toastItem.classList.add("toast-container__message");
  toastItem.textContent = "I'm a toast message.";
  toastContainer.append(toastItem);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.textContent = "";
});
