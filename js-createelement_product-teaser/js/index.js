console.clear();
const newProductName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";
//creating elements
const article = document.createElement("article");
const section = document.createElement("section");
const productTextContainer = document.createElement("div");
const productName = document.createElement("h2");
const productCategories = document.createElement("ul");
const productCategory1 = document.createElement("li");
const productCategory2 = document.createElement("li");
const productCategory3 = document.createElement("li");
const productDescription = document.createElement("p");
const productImageContainer = document.createElement("div");
const productImage = document.createElement("img");
const footer = document.createElement("footer");
const priceSpan = document.createElement("span");
const buyButton = document.createElement("button");
//adding classes
article.classList.add("product");
section.classList.add("product__body");
productTextContainer.classList.add("product__text-container");
productName.classList.add("product__name");
productCategories.classList.add("product__categories");
productCategory1.classList.add("product__category");
productCategory2.classList.add("product__category");
productCategory3.classList.add("product__category");
productDescription.classList.add("product__description");
productImageContainer.classList.add("product__image-container");
productImage.classList.add("product__image");
footer.classList.add("product__footer");
priceSpan.classList.add("product__price");
buyButton.classList.add("product__buy-button");
//adding attributes
productImage.setAttribute(
  "src",
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640"
);
buyButton.setAttribute("type", "button");
//nesting elements
article.append(section);
article.append(footer);
section.append(productTextContainer);
section.append(productImageContainer);
productTextContainer.append(productName);
productTextContainer.append(productCategories);
productTextContainer.append(productDescription);
productCategories.append(productCategory1);
productCategories.append(productCategory2);
productCategories.append(productCategory3);
productImageContainer.append(productImage);
footer.append(priceSpan);
footer.append(buyButton);
//adding new post to page
const main = document.querySelector("#main");
main.append(article);
//adding content
productName.textContent = newProductName;
productCategory1.textContent = category1;
productCategory2.textContent = category2;
productCategory3.textContent = category3;
productDescription.textContent = description;
priceSpan.textContent = price;
buyButton.textContent = "Buy";
