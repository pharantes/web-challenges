export function Square(getRandomColors) {
  const Square = document.createElement("div");
  Square.classList.add("square");
  Square.addEventListener("click", () => {
    Square.style.backgroundColor = getRandomColors();
  });
  return Square;
}
