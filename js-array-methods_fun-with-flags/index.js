import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  const foundCountries = countries.filter((country) => {
    let name = country.name.toLowerCase()
    return name.startsWith(searchString);
  });

  if (foundCountries) {
    foundCountries.forEach(country => {
      const countryElement = Country(country);
      container.append(countryElement);
    })
  }
});
