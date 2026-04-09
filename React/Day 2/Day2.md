# React Day 2 - Summary

## Overview

This session covers rendering lists in React and handling click events.

## Key Topics

### 1. Rendering Lists

- Use the `.map()` method to render arrays of data
- Always provide a unique `key` prop to list items for React reconciliation
- Example structure: render array of objects with id, name, and calories

**List Component Features:**

- Accepts `items` (array) and `category` (string) props
- Supports sorting (alphabetical, reverse alphabetical, numerical)
- Supports filtering based on conditions
- Uses semantic HTML with `<ol>` and `<li>` tags

### 2. React Click Events

Six event handling patterns demonstrated:

1. **Basic onClick** - Simple handler function
2. **onClick with Parameters** - Pass arguments using arrow functions
3. **onClick with Conditions** - Add state logic and conditionals
4. **Event Object Handling** - Access and manipulate event target
5. **Double-click Events** - Use `onDoubleClick` attribute
6. **DOM Manipulation** - Modify element styles on interaction

**Best Practice:** Use arrow functions for inline handlers to pass parameters safely.

### 3. Conditional Rendering

- Use `&&` (short-circuit evaluation) for conditional rendering
- Example: `{array.length > 0 && <Component />}`
