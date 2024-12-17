console.clear();

const display = document.querySelector('[data-js="display"]');
const date = new Date();
const day = date.getDay();
const time = date.getHours();
let greeting;
let color;
console.log(time);
function getGreeting(time) {
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
function getDayColor() {
  switch (day) {
    case "thursday":
    case "monday":
      color = "darkgrey";
      break;
    case "friday":
    case "tuesday":
      color = "lightblue";
      break;
    case "saturday":
    case "sunday":
      color = "hotpink";
      break;
  }
  return color;
}
display.textContent = getGreeting(time);
document.body.style.backgroundColor = getDayColor();
