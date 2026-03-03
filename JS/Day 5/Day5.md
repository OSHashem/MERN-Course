# Day 5: JavaScript Functions and Scope

## Functions

### Overview
A **function** is a reusable section of code that executes when called. Declare once, use multiple times.

### Basic Function Syntax
```javascript
function happyBirthday(username, age) {
    console.log(`Happy birthday dear, ${username}`);
    console.log(`You are ${age} years old!`);
}

happyBirthday("Omar", 23); // Function call with arguments
```

### Parameters vs Arguments
- **Parameters**: Variables in the function definition
- **Arguments**: Actual values passed when calling the function
- Order matters

### Return Keyword
Functions can return values using the `return` keyword:
```javascript
function add(x, y) {
    return x + y;
}
```

---

## Variable Scope

**Scope** determines where a variable is accessible.

### Types of Scope
- **Global Scope**: Accessible throughout the entire program
- **Local Scope**: Accessible only within a function
- Functions cannot access variables inside other functions
- Same variable names can exist in different scopes

### Scope Resolution
Functions check local scope first, then fall back to global scope.

---

## JavaScript Hoisting

**Hoisting** moves declarations to the top of their scope before execution.

### Key Points
- Only **declarations** are hoisted, not **assignments**
- `var`: hoisted with default value `undefined`
- `let` and `const`: hoisted but placed in Temporal Dead Zone (TDZ) — cannot be used before declaration

### Common Gotcha
```javascript
d = 5;
let d; // ReferenceError: Cannot access 'd' before initialization
```

---



