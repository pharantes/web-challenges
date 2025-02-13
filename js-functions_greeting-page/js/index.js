console.clear();

const display = document.querySelector('[data-js="display"]');
const date = new Date();
const day = date.getDay();
const time = date.getHours();
let greeting;
let color;
console.log(time);
function getGreeting() {
  if (time > 6 && time < 13) {
    greeting = "Good Morning";
  }
  if (time > 13 && time < 18) {
    greeting = "Good Afternoon";
  }
  if (time > 18 && time < 22) {
    greeting = "Good Evenning";
  }
  if (time > 22 && time < 6) {
    greeting = "Good Night";
  }
  return greeting;
}
console.log(day);
function getDayColor() {
  switch (day) {
    case 4:
    case 1:
      color = "darkgrey";
      break;
    case 5:
    case 2:
      color = "lightblue";
      break;
    case 6:
    case 0:
      color = "hotpink";
      break;
  }
  return color;
}
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
