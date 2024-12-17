console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const book = {
  title: "title",
  author: "author",
  rating: "rating",
  soldCopies: "number of sold copies",
};
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:
Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log(book.title);
console.log(book.author);
console.log(book.rating);
console.log(book.soldCopies);

book.soldCopies = "number of sold copies updated";
book.rating = "better rating";

console.log(book.rating);
console.log(book.soldCopies);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(data1, data2, data3, data4) {
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
}

logBookData(book.title, book.author, book.rating, book.soldCopies);

// --^-- write your code here --^--
