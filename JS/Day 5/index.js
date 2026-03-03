// Day 5

// JS Function
// A section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute that code.

// Parameters (order matters)
function happyBirthday(username, age) {
  console.log(`Happy birthday to you!`);
  console.log(`Happy birthday to you!`);
  console.log(`Happy birthday dear, ${username}`);
  console.log(`Happy birthday to you!`);
  console.log(`You are ${age} years old!`);
}

// Arguments
happyBirthday("Omar", 23);

// Return Keyword Examples
function add(x, y) {
  return x + y;
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

////////////////////////////////////////////////////////////////////////

// JS Variable Scope
// variable scope = where a variable is recognized and accessible (local vs global)
// You can use the same variables name as long as they are in different scopes
// Functions can't see inside of other functions

let x = 3; // global scope, seen through the whole program

function function1() {
  let x = 1; // local scope
  console.log(x); // Output: 1
}

function function2() {
  let x = 2; // local scope
  console.log(x); // Output: 2, the fucntion will check for this variable within the local scope first if not found will move to the global scope
}

function1();

////////////////////////////////////////////////////////////////////////

// JS TEMPERATURE CONVERSION PROGRAM

const result = document.getElementById("result");
const toCel = document.getElementById("toCel");
const toFah = document.getElementById("toFah");
const textBox = document.getElementById("textBox");
let temp;

function convert() {
  if (toFah.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCel.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "select a unit";
  }
}
