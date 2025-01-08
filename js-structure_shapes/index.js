console.clear();

import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";
import { getRandomColor } from "./utils/randomColor.js";

const root = document.getElementById("root");
const circle = Circle(getRandomColor);
const pentagon = Pentagon(getRandomColor);
const square = Square(getRandomColor);

root.append(circle, square, pentagon);
