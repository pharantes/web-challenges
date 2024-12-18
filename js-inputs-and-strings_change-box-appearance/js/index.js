console.clear();
const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const textInput = document.querySelector('[data-js="input-text"]');
const box = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  box.style.background = `hsl(
    ${colorInput.value},
    60%,
    50%
  )`;
});

radiusInput.addEventListener("input", () => {
  box.style.borderRadius = `${radiusInput.value}%`;
});
rotationInput.addEventListener("input", () => {
  box.style.transform = `rotate(${rotationInput.value}deg)`;
});
// textInput.addEventListener("input", () => {
//   console.log(textInput.value);
// });
