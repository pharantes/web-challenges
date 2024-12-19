console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // [...] handle form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("The age-badness-sum of", data.firstName, "is", data.age + data.badness);
    event.target.reset();
});

// OUTPUT
// {
//  age: "18"
//  badness: "32"
//  complaint: "nothing"
//  details: ""
//  email: ""
//  firstName: "aaaaaaa"
//  lastName: ""orderDate: ""
//  [[Prototype]]: Object
// }
// The age-badness-sum of aaaaaaa is -14