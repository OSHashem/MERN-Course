
# JavaScript Day 9 - Summary

## Destructuring
Destructuring extracts values from arrays and objects into variables.
- **Array destructuring**: `[a, b] = [b, a]` - swap variables or extract elements
- **Rest operator**: `[first, ...rest] = array` - capture remaining elements
- **Object destructuring**: `const { firstName, age = "default" } = obj` - extract properties with optional defaults
- **Function parameters**: Destructure objects directly in function signatures

## Nested Objects
Objects can contain other objects for complex data structures.
- Access nested properties: `person.address.street`
- Use classes to organize nested data with constructors
- Iterate through nested properties with `for...in` loops

## Arrays of Objects
Combine arrays with objects to store collections of structured data.
- **forEach()**: Loop through each element
- **map()**: Transform array into new array
- **filter()**: Create new array with filtered elements
- **reduce()**: Accumulate values into single result
- **push/pop/splice()**: Modify array contents

## Sorting
The `sort()` method orders array elements.
- Default: Lexicographic order (treats elements as strings)
- **Custom comparator**: `sort((a, b) => a - b)` for numeric sort
- **String comparison**: Use `localeCompare()` for proper string sorting
- **Object properties**: Sort by property value with comparator function

## Shuffling
- Avoid `sort(() => Math.random() - 0.5)` - inefficient and biased
- **Fisher-Yates algorithm**: Optimal shuffling method that produces unbiased random permutations

## Date Objects
Date objects handle dates and times with various methods.
- **Create**: `new Date()`, `new Date(year, month, day)`, `new Date("2024-01-01")`
- **Get/Set**: `getFullYear()`, `setMonth()`, `getDay()`, etc.
- **Compare**: Use relational operators (`>`, `<`) on Date objects
- **Parse**: `Date.parse()` returns milliseconds since epoch (Jan 1, 1970)
