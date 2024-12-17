console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)
- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');
const date = new Date();
const day = date.getDay();
const time = date.getHours();
let greeting;
let color;
function getGreeting() {
  time > 6 && time < 13 ? (greeting = "Good Morning") : "";
  time > 13 && time < 19 ? (greeting = "Good Afternoon") : "";
  time > 19 && time < 22 ? (greeting = "Good Evening") : "";
  time > 22 && time < 6 ? (greeting = "Good Night") : "";
}

function getDayColor() {
  switch (day) {
    case "monday":
      color = "darkgrey";
      break;
    case "tuesday":
      color = "lightblue";
      break;
    case "thursday":
      color = "evening";
      break;
    case "friday":
      color = "lightblue";
      break;
    case "saturday":
      color = "hotpink";
      break;
    case "sunday":
      color = "hotpink";
      break;
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
