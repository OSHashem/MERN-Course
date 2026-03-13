# Day 7 JavaScript Summary

## Callbacks

A **callback** is a function passed as an argument to another function. Callbacks are essential for handling asynchronous operations such as reading files, making network requests, or interacting with databases. They allow JavaScript to continue executing other code while waiting for a task to complete.

**Example:**
```js
function hello(callback) {
    console.log("Hello!");
    callback();
}

function goodbye() {
    console.log("Goodbye!");
}

hello(goodbye);
```

## Array Methods

### forEach()

The `forEach()` method iterates over array elements and applies a callback to each element. It provides the element, index, and array to the callback.

**Example:**
```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}
function display(element) {
    console.log(element);
}
```

### map()

The `map()` method applies a callback to each array element and returns a new array with the results.

**Example:**
```js
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(square);

function square(element) {
    return Math.pow(element, 2);
}
console.log(squared); // [1, 4, 9, 16, 25]
```

### filter()

The `filter()` method creates a new array containing elements that pass a test implemented by the callback.

**Example:**
```js
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

function isEven(element) {
    return element % 2 === 0;
}
console.log(evenNums); // [2, 4, 6]
```

### reduce()

The `reduce()` method reduces an array to a single value using a callback.

**Example:**
```js
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

function sum(accumulator, element) {
    return accumulator + element;
}
console.log(total); // 105
```

## Function Expressions

Function expressions allow functions to be assigned to variables and passed as values.

**Example:**
```js
const hello = function () {
    console.log("Hello");
};
hello();
```

They are commonly used as callbacks in asynchronous operations and array methods.

## Arrow Functions

Arrow functions provide a concise syntax for writing function expressions. They are ideal for simple, one-time-use functions.

**Example:**
```js
const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};
hello("Omar", 23);
```

Arrow functions are frequently used with array methods:
```js
const digits = [1, 2, 3, 4, 5, 6];
const squares = digits.map(element => Math.pow(element, 2));
const evenNumbers = digits.filter(element => element % 2 === 0);
const totalPrice = digits.reduce((acc, element) => acc + element);
```

---

**Summary:**  
Day 7 covered JavaScript callbacks, array methods (`forEach`, `map`, `filter`, `reduce`), function expressions, and arrow functions. These concepts are fundamental for writing efficient, readable, and asynchronous JavaScript code.