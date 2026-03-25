// DAY 11

// --------------------------------------------- JS ES6 Modules ----------------------------------
// An external file that contains reusable code that can be imported into other JavaScript files.
// Can contain variables, classes, functions ... and more.
// Introduced as part of ECMAScript 2015 update.
// To do so, we will go the index.html file we will set the "type" attribute to "module".

// Doing this you will be able to use all the fucntions and variables in the "mathUtil.js" file
// import { PI, getArea, getCircumference, getVolume } from "./mathUtil.js";

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// //////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------------------------- JS Asynchronous code ----------------------------------
// synchronous  = Executes line by line consecutively in a sequential manner.
// Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting.
// Doesn't block the execution flow and allows the program to continue.
// Ex: (I/O operations, network requests, fetching data). It is usually anything that takes indeterminate amount of time.
// Handled with: Callbacks, Promises, Async/Await

// EXAMPLE 1: Synchronous code
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// EXAMPLE 2: Aynchronous code (setTimeout())
setTimeout(() => console.log("Task 1"), 3000); // Output: 2,3,4,1

// EXAMPLE 3: Aynchronous code (Callbacks)
function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 5000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2); // Output: 1,2,3,4

// //////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------------------------- JS Error handling ----------------------------------
// An Object that is created to represent a problem that occurs.
// Occur often with user input or establishing a connection.

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }.
// finally { } = (optional) Always executes. Used mostly for clean up.
// ex. close files, close connections, release resources.

// EXAMPLE 1: Errors (Uncaught TypeError)
// console.lag("Hello"); // Output: Uncaught TypeError. This will exit the program and it won't finish executing.

// EXAMPLE 2: Errors (Uncaught ReferenceError)
// console.log(x); // Output: Uncaught ReferenceError. This will exit the program and it won't finish executing.

// EXAMPLE 3: try/catch/finally
// This will allow the program to continue execution even if there is an error
try {
  console.log(x); // Output: Uncaught ReferenceError. This will exit the program and it won't finish executing.
} catch (err) {
  console.error(err);
} finally {
  // close files,
  // close connections,
  // release resources
  console.log("This always executes");
}

// EXAMPLE 4: throw new Error()
try {
  // const dividend = Number(window.prompt("Enter a dividend: "));
  // const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("you can't divide by zero"); // Output Error: errMsg
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be number"); // Output Error: errMsg
  }

  const result = dividend / divisor;
  console.lag(result);
} catch (error) {
  console.error(error);
}
console.log("You have reached end!");

// //////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------------------------------- JS Calculator ----------------------------------
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  // we placed the eval function in the a try/catch block to handle/catch any error without causing the program to crash
  try {
    // eval() allows you to execute a string of code as if it were actual JavaScript code.
    // While it is a useful tool, it is a security risk.
    // It is recommended using eval() ONLY for learning purposes and not any actual production code.
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
