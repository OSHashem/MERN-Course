
# JavaScript Day 1 - Summary

## Introduction
An introduction to JavaScript fundamentals covering variables, operators, type conversion, and basic DOM manipulation.

## Key Topics

### Variables
- **Types**: Number, String, Boolean
- **Declaration**: Use `let` for variables
- **Template Literals**: `` `Text ${variable}` ``

### Arithmetic Operators
- **Basic**: `+`, `-`, `*`, `/`, `%`, `**` (exponent)
- **Operator Precedence**: Parentheses → Exponents → Multiplication/Division/Modulus → Addition/Subtraction
- **Augmented Assignment**: `+=`, `-=`, `*=`, `/=`, `**=`
- **Increment/Decrement**: `++`, `--`

### User Input
1. **Easy**: `window.prompt("text")`
2. **Hard**: HTML form + event listeners with `onclick`

### Type Conversion
- `Number()` - converts to number (non-numeric strings = NaN, empty = 0)
- `String()` - converts to string
- `Boolean()` - converts to boolean (falsy: `""`, `undefined`, `NaN`, `0`, `null`, `false`)

### Constants
- Use `const` for values that shouldn't change
- Attempting to reassign throws `TypeError`

### DOM Manipulation
- `document.getElementById()` - select elements
- `.textContent` - set/get text
- `.value` - get input values
- `.onclick` - event listener

### Example: Counter Program
Demonstrates button clicks incrementing/decrementing a counter with real-time display update.
