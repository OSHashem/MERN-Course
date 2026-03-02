
# JavaScript Day 4: Logical Operators, Equality, and Loops

## Logical Operators
Used to combine or manipulate Boolean values:
- `&&` (AND) - Both conditions must be true
- `||` (OR) - At least one condition must be true
- `!` (NOT) - Inverts a Boolean value

**Example:**
```javascript
if (temp > 0 && temp <= 30) {
    console.log("weather is good");
}
```

## Strict Equality
- `=` - Assignment operator
- `==` - Loose equality (compares values only)
- `===` - Strict equality (compares values AND data types)
- `!=` - Loose inequality
- `!==` - Strict inequality

**Example:**
```javascript
if (PI === "3.14") { // false - different types
    console.log("That is NOT Pi");
}
```

## Loops

### While Loops
Executes code while a condition is true.

### Do-While Loops
Executes code at least once, then checks the condition.

### For Loops
Repeats code a specific number of times. Use `continue` to skip iterations and `break` to exit.

