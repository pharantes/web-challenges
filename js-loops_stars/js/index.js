console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= filledStars; i++) {
    let star = document.createElement("img");
    star.setAttribute("src", "./assets/star-filled.svg");
    starContainer.append(star);
  }
  for (let index = 1; index <= 5 - filledStars; index++) {
    let star = document.createElement("img");
    star.setAttribute("src", "./assets/star-empty.svg");
    starContainer.append(star);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(3);
