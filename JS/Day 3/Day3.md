
# JavaScript Day 3: String Methods & Slicing

## Overview
This lesson covers essential JavaScript string methods for manipulating and working with text data.

## String Methods

### Character & Index Access
- **`charAt(index)`** - Returns character at specified index
- **`indexOf(char)`** - Returns index of first occurrence
- **`lastIndexOf(char)`** - Returns index of last occurrence
- **`length`** - Returns string length

### Case & Whitespace
- **`toUpperCase()`** - Converts all characters to uppercase
- **`toLowerCase()`** - Converts all characters to lowercase
- **`trim()`** - Removes whitespace from both ends

### Search & Validation
- **`startsWith(str)`** - Returns boolean if string starts with specified value
- **`endsWith(str)`** - Returns boolean if string ends with specified value
- **`includes(str)`** - Returns boolean if string contains specified value

### Manipulation
- **`repeat(n)`** - Repeats string n times
- **`replaceAll(old, new)`** - Replaces all occurrences of a substring
- **`padStart(length, char)`** - Pads from the start until reaching specified length
- **`padEnd(length, char)`** - Pads from the end until reaching specified length

## String Slicing
**Formula:** `string.slice(start, end)`
- `end` index is excluded
- Negative indices count from the end: `slice(-1)` gets last character
- **Use case:** Extract username and domain from email

## Method Chaining
Calling multiple methods in one line to avoid intermediate variables:
```javascript
user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase();
```
