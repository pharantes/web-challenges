export function Pentagon(getRandomColors) {
  const Pentagon = document.createElement("div");
  Pentagon.classList.add("pentagon");
  Pentagon.addEventListener("click", () => {
    Pentagon.style.backgroundColor = getRandomColors();
  });
  return Pentagon;
}
