# Day 11: ES6 Modules, Asynchronous Code, Error Handling & Calculator

## Overview
Day 11 focuses on advanced JavaScript concepts including ES6 modules for code reusability, asynchronous programming patterns, error handling mechanisms, and a practical calculator implementation.

---

## 1. JavaScript ES6 Modules

### What are ES6 Modules?
- External files containing reusable code that can be imported into other JavaScript files
- Can contain variables, classes, functions, and more
- Introduced as part of ECMAScript 2015 (ES6) update
- Enables better code organization and maintainability

### How to Use Modules

#### Setting Up:
1. In the HTML file, set the `type` attribute of the `<script>` tag to `"module"`
   ```html
   <script type="module" src="index.js"></script>
   ```

#### Exporting Code:
- Use the `export` keyword before variables, functions, or classes in the module file
- **Note**: You can only have one `default export` in a module file

Example from `mathUtil.js`:
```javascript
export const PI = 3.14159;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return PI * radius * radius;
}
```

#### Importing Code:
- Use the `import` keyword to access exported variables and functions
```javascript
import { PI, getArea, getCircumference } from "./mathUtil.js";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
```

### Benefits of Modules:
- Code reusability across multiple files
- Organized project structure
- Reduced global namespace pollution
- Easier maintenance and debugging

---

## 2. JavaScript Asynchronous Code

### Synchronous vs Asynchronous

#### Synchronous Code:
- Executes line by line consecutively in a sequential manner
- Code waits for an operation to complete before moving to the next line
- Blocks execution flow

#### Asynchronous Code:
- Allows multiple operations to be performed concurrently without waiting
- Doesn't block the execution flow; program continues running
- Essential for: I/O operations, network requests, fetching data
- Anything that takes an indeterminate amount of time

### Handling Asynchronous Code: Three Approaches

#### 1. **setTimeout() - Delay Execution**
```javascript
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
setTimeout(() => console.log("Task 1"), 3000);
// Output: Task 2, Task 3, Task 4, Task 1
```
- `setTimeout()` delays code execution by a specified milliseconds
- The callback runs after the delay, not blocking other code

#### 2. **Callbacks - Passing Functions**
```javascript
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

func1(func2);
// Output: Task 1, Task 2, Task 3, Task 4
```
- Pass a function as an argument to be executed later
- Useful for sequential asynchronous operations
- Can lead to "callback hell" with nested callbacks

---

## 3. JavaScript Error Handling

### What are Errors?
- Objects created to represent a problem that occurs during execution
- Often occur with user input or when establishing connections
- If not handled, errors can crash the program

### Error Handling Blocks

#### `try { }` Block:
- Encloses code that might potentially cause an error
- If an error occurs in this block, execution jumps to catch block

#### `catch { }` Block:
- Catches and handles any thrown errors from the `try` block
- Receives the error object with details about what went wrong

#### `finally { }` Block (Optional):
- Always executes whether an error occurs or not
- Used for cleanup operations:
  - Closing files
  - Closing database connections
  - Releasing resources

### Error Handling Example:
```javascript
try {
  console.log(x); // ReferenceError: x is not defined
} catch (err) {
  console.error(err); // Handles the error gracefully
} finally {
  console.log("This always executes");
}
```

### Throwing Custom Errors:
```javascript
try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("You can't divide by zero");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be numbers");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}
console.log("You have reached the end!");
```

### Common Error Types:
- `TypeError`: Wrong type of value used
- `ReferenceError`: Variable or function not defined
- `SyntaxError`: Invalid JavaScript syntax
- `Custom Errors`: User-defined errors using `throw new Error()`

### Best Practices:
- Always use try/catch for potentially risky operations
- Provide meaningful error messages
- Use finally for cleanup operations
- Log errors for debugging purposes

---

## 4. Practical Application: JavaScript Calculator

### Overview:
A functional calculator built with HTML, CSS, and JavaScript demonstrating error handling with the `eval()` function.

### HTML Structure:
- Input display (read-only)
- Grid layout with 17 buttons:
  - Numbers (0-9)
  - Operators (+, -, *, /)
  - Decimal point (.)
  - Calculate (=)
  - Clear (C)

### JavaScript Functions:

#### `appendToDisplay(input)`
- Appends clicked number or operator to the display
- Concatenates the input to the current display value

#### `calculate()`
```javascript
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
```
- Uses `eval()` to execute the mathematical expression as code
- **Important**: `eval()` is wrapped in try/catch to handle errors
- Displays "Error" if calculation fails
- **Security Note**: `eval()` is dangerous; only use for learning purposes, NOT in production code

#### `clearDisplay()`
- Resets the display value to empty string

### CSS Styling:
- Grid layout for buttons (4 columns)
- Operator buttons highlighted in orange
- Hover and active states for user feedback
- Responsive button sizing

### Learning Points:
- Error handling with try/catch
- Using eval() for dynamic code execution (learning only)
- DOM manipulation
- CSS Grid layout
- Event handling with onclick attributes

---

## Summary of Key Concepts

| Concept | Purpose | Key Points |
|---------|---------|-----------|
| **ES6 Modules** | Code reusability & organization | Export/import, single default export |
| **Asynchronous Code** | Non-blocking operations | setTimeout, callbacks, promises, async/await |
| **Error Handling** | Graceful failure management | try/catch/finally, throw errors |
| **Calculator App** | Practical implementation | eval(), DOM manipulation, event handling |

---