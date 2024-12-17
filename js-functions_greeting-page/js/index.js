console.clear();

const display = document.querySelector('[data-js="display"]');
const date = new Date();
const day = date.getDay();
const time = date.getHours();
let greetings;
let color;

function getGreeting(time) {
  if (time > 6 && time < 13) {
    greetings = "Good Morning";
  }
  if (time > 13 && time < 18) {
    greetings = "Good Afternoon";
  }
  if (time > 18 && time < 22) {
    greetings = "Good Evenning";
  }
  if (time > 22 && time < 6) {
    greetings = "Good Night";
  }
  return greetings;
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
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
