# Day 6: JavaScript Arrays, Operators & Dice Roller

## Arrays
Arrays are variables that hold multiple values in a single structure.
```javascript
const fruits = new Array ('Orange', 'Banana', 'Apple'); 
```
### Common Array Methods
- `push()` - Add element to end
- `pop()` - Remove last element
- `unshift()` - Add element to beginning
- `shift()` - Remove first element
- `length` - Get array size
- `indexOf()` - Find element index
- `sort()` - Sort alphabetically
- `reverse()` - Reverse order
- `join()` - Combine elements into string

### Looping Arrays
```javascript
for (let item of array) {
    console.log(item);
}
```

## 2D Arrays
Multi-dimensional arrays storing data in rows and columns. Access elements with `array[row][col]`.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
```

## Spread Operator (`...`)
Expands arrays/strings into separate elements.

```javascript
let numbers = [1, 2, 3];
Math.max(...numbers);  // 3
let letters = [..."hello"];  // ['h','e','l','l','o']
```

## Rest Parameters (`...`)
Bundles separate function arguments into an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((a,b) => a+b);
}
sum(1, 2, 3);  // 6
```

## Dice Roller Program
Web application that rolls multiple dice and displays:
- Number values in text
- Dice images from Media folder

Uses `Math.random()` and DOM manipulation to update results.

## Password Generator
Creates random passwords with configurable options:
- Lowercase, uppercase, numbers, special characters
- Validates length and character selection
