export function Circle(getRandomColors) {
  const Circle = document.createElement("div");
  Circle.classList.add("circle");
  Circle.addEventListener("click", () => {
    Circle.style.backgroundColor = getRandomColors();
  });
  return Circle;
}
