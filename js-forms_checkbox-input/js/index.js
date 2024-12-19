console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(tosCheckbox.checked)
  // --v-- write your code here --v--
  if (tosCheckbox.checked == false) {
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  event.target.reset();
  showSuccess();
  // alert("Form submitted");
});
tosCheckbox.addEventListener("input", (event) => {
  if (tosCheckbox.checked == false) showTosError()
  if (tosCheckbox.checked == true) hideTosError()
})