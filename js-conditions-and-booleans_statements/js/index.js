console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
if (SUPER_SECRET_PASSWORD == receivedPassword) {
    console.log("Welcome! You are logged in as Brunhilde1984.")
} else {
    console.log("Access denied!")
}
// Part 2: Even / Odd
const number = 6;
if (number % 2 == 0) {
    console.log('even number')
} else {
    console.log('odd number')

}
// Part 3: Hotdogs
const numberOfHotdogs = 42;
let price;
if (numberOfHotdogs < 5) price = 2;
if (numberOfHotdogs > 5 && numberOfHotdogs < 100) price = 1.5;
if (numberOfHotdogs > 100 && numberOfHotdogs < 100000000) price = 1;
if (numberOfHotdogs > 100000000) price = .1;

// Part 4: Daytime
const currentHour = 12;
const statement = currentHour > 17 ? "Still need to learn..." : "Partytime!!!";


console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + userName == "Coach" ? "Hello Coach" : userName + "!";

console.log(greeting);
