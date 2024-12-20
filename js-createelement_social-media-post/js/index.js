console.clear();
function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
//getting body
const posts = document.querySelector("#all__posts");
// Exercise:
// Use document.createElement() and append another social media post to the body.
//creating elements
const article = document.createElement("article");
const p = document.createElement("p");
const span = document.createElement("span");
const footer = document.createElement("footer");
const button = document.createElement("button");
//adding classes
article.classList.add("post");
p.classList.add("post__content");
span.classList.add("post__username");
footer.classList.add("post__footer");
button.classList.add("post__button");
button.setAttribute("data-js", "like-button");
button.setAttribute("type", "button");
//adding content
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
span.textContent = "@username";
button.textContent = "♥ Like";
//adding another post
article.append(p);
article.append(footer);
footer.append(span);
footer.append(button);
posts.append(article);
