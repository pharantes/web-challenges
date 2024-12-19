console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.style.display = "none";
}

function showTosError() {
  tosError.style.display = "flex";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.checked) return
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) { hideTosError() }
  else { showTosError() }
});