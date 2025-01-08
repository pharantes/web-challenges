console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data:", data);
    const names = data.results.map((person) => person.name);
    console.log("names:", names);
    const r2d2 = data.results.filter((person) => {
      person.name == "R2-D2";
    });
    console.log("r2d2:", r2d2.eye_color);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
