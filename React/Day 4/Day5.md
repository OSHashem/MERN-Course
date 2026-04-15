
# React State Management: Objects, Arrays, and Lists

## Overview
This guide covers updating complex state in React, including objects, arrays, and arrays of objects, with practical examples.

## 1. Updating Objects in State

### Key Concept
Use the spread operator (`...`) to create a new object while preserving other properties.

```javascript
setCar((c) => ({ ...c, year: event.target.value }));
```

**Why?** React detects state changes by comparing object references. Always create a new object rather than mutating the existing one.

### Example
The `Object.jsx` component manages a car object with `year`, `make`, and `model` properties. Each input field calls a handler that updates only its property while keeping others intact.

---

## 2. Updating Arrays in State

### Key Concept
Create new arrays instead of mutating existing ones. Use methods like `map()`, `filter()`, and spread operator (`...`).

### Add Items
```javascript
setFoods((f) => [...f, newFood]);
```

### Remove Items
```javascript
setFoods(foods.filter((_, i) => i != index));
```

**Note:** The underscore (`_`) convention indicates an unused parameter.

---

## 3. Arrays of Objects

### Pattern
Combine array and object update techniques to manage complex nested state.

```javascript
const newCar = { year: carYear, make: carMake, model: carModel };
setCars((c) => [...c, newCar]);
```

### Common Operations
- **Add:** Spread the array and append the new object
- **Remove:** Filter by index
- **Update individual properties:** Spread the object within the array

---

## 4. To-Do List Application

### Features
- Add tasks with input validation (`trim()` check)
- Delete tasks by index
- Reorder tasks up/down using array destructuring for swapping

### Key Code Pattern (Swap Elements)
```javascript
[updateTasks[index - 1], updateTasks[index]] = [
    updateTasks[index],
    updateTasks[index - 1],
];
```

---

## Best Practices

1. **Always update state with new references**, not mutations
2. **Use functional setState** `setState((prev) => ...)` for safer updates
3. **Use unique keys** in `.map()` (avoid index as key in dynamic lists)
4. **Validate input** before adding to prevent empty/invalid entries
5. **Use filter() instead of splice()** to remove array items
