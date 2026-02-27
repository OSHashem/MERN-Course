
# JavaScript Day 2 - Summary

## Math Object
Built-in object providing properties and methods for mathematical operations.

### Constants
- `Math.PI` - Pi constant
- `Math.E` - Euler's number

### Rounding Methods
- `Math.round(x)` - Rounds to nearest integer
- `Math.floor(x)` - Rounds down
- `Math.ceil(x)` - Rounds up
- `Math.trunc(x)` - Removes decimal portion

### Mathematical Functions
- `Math.pow(x, y)` - Power (x^y)
- `Math.sqrt(x)` - Square root
- `Math.log(x)` - Logarithm
- `Math.abs(x)` - Absolute value
- `Math.sign(x)` - Returns -1, 0, or 1
- `Math.max(x, y, z)` - Maximum value
- `Math.min(x, y, z)` - Minimum value

### Trigonometric Functions
- `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)` - Angles in radians

## Random Number Generation
`Math.random()` generates a number between 0 and 1. Scale to desired range: `Math.floor(Math.random() * max) + min`

## Conditional Statements

### If/Else If/Else
Used for multiple conditions with different outcomes.

### Ternary Operator
Shorthand: `condition ? codeIfTrue : codeIfFalse`

### Switch Statements
Efficient replacement for multiple `else if` statements. Use `break` to prevent fall-through execution.

## Checked Property
`.checked` determines if checkbox or radio button is selected (returns boolean).
