// DAY 7

// ----------------------------------- JS CallBacks -------------------------------------
//  a function that is passed as an argument to another function.

// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// "Hey, when you're done, call this next."(display the content/result when you are done with the task)
// If it takes a long time to read file for example, js will continue with the rest of the program

// EXAMPLE 1

function hello(callback) {
  console.log("Hello!");
  callback();
}

function goodbye() {
  console.log("Goodbye!");
}

hello(goodbye);

// EXAMPLE 2
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

// you can pass callbacks as well as other arguments to a function
sum(displayConsole, 1, 2);

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------- JS forEach() -------------------------------------
// method used to iterate over the elements of an array and apply a specified function (callback) to each element
// array.forEach(callback)
// element, index, array are provided

// EXAMPLE 1
const numbers = [1, 2, 3, 4, 5];

// Behind the scence, the for each method provides the callback function with  element, index, array
numbers.forEach(double);
numbers.forEach(display);

function display(element) {
  console.log(element);
}

function double(element, index, array) {
  array[index] = element * 2;
}

// EXAMPLE 2
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowercase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------- JS map() -------------------------------------
// accepts a callback and applies that function to each element of an array, then return a new array

// EXAMPLE 1
const number1 = [1, 2, 3, 4, 5];
const squared = number1.map(square);

console.log(squared);

function square(element) {
  return Math.pow(element, 2);
}

// EXAMPLE 2
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element) {
  return element.toUpperCase();
}

// EXAMPLE 3
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-"); // Takes a string (e.g., "2024-1-10") and splits it at every hyphen, creating an array of substrings: ["2024", "1", "10"].
  return `${parts[1]}/${parts[2]}/${parts[0]}`; // Uses template literals (backticks) to reorder the parts into Month/Day/Year format.
}

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------- JS filter() -------------------------------------
// creates a new array by filtering out elements with a callback

// EXAMPLE 1
let numbers2 = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers2.filter(isEven);
let oddNums = numbers2.filter(isOdd);

console.log(oddNums);

function isEven(element) {
  return element % 2 === 0; // Checks if each element passes the condition
}

function isOdd(element) {
  return element % 2 !== 0;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);

function getShortWords(element) {
  return element.length <= 6;
}

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------- JS reduce() -------------------------------------
// reduce the elements of an array to a single value

// EXAMPLE 1
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element; // accumulator is previous number while element is the next number
  // after adding acc with element we will call the method again with acc equals the addition of the two elements
}

// EXAMPLE 2
const scores = [75, 50, 90, 80, 65, 95];
const maximum = scores.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------- JS FUNCTION EXPRESSIONS -------------------------------------
// a way to define functions as values or variables
//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

// EXAMPLE 1
// const hello = function () {
//   console.log("Hello");
// };

// hello();

// EXAMPLE 2
// Using JS we also have the capability of passing a function as a value
setTimeout(function () {
  console.log("Goodbye");
}, 3000);

// EXAMPLE 3 (With map() method)
const digits = [1, 2, 3, 4, 5, 6];
const squares = digits.map(function (element) {
  return Math.pow(element, 2);
});

console.log(`using map with fun expr ${squares} `);

// EXAMPLE 4 (With filter() method)
let evenNumbers = digits.filter(function (element) {
  return element % 2 === 0;
});

// EXAMPLE 5 (With reduce() method)
const totalPrice = digits.reduce(function (accumulator, element) {
  return accumulator + element;
});

///////////////////////////////////////////////////////////////////////////////////////////////

// ----------------------------------- JS ARROW FUNCTIONS -------------------------------------
// arrow functions = a concise way to write function expressions.
// good for simple functions that you use only once.
// format : (parameters) => some code

// EXAMPLE 1
const hello1 = (yourName, age) => {
  console.log(`Hello ${yourName}`);
  console.log(`You are ${age} years old`);
};

hello1("Omar", 23);

// EXAMPLE 2
setTimeout(() => console.log("Goodbye"), 3000);

// EXAMPLE 3 (With map() method)
const digit = [1, 2, 3, 4, 5, 6];
const digitSquared = digit.map((element) => Math.pow(element, 2));

console.log(`using map with fun expr ${digitSquared} `);

// EXAMPLE 4 (With filter() method)
let evenNumber = digit.filter((element) => element % 2 === 0);

// EXAMPLE 5 (With reduce() method)
const totalPayment = digit.reduce(
  (accumulator, element) => accumulator + element,
);
