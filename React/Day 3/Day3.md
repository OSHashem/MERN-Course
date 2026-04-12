# React Day 3: useState() Hook & Event Handlers

## Overview

Day 3 covers React's `useState()` hook for managing component state and various event handlers for form interactions.

## Key Concepts

### 1. React Hooks

**Definition:** Special functions that allow functional components to use React features without writing class components.

**Common Hooks:**

- `useState` (most used)
- `useEffect`
- `useContext`
- `useReducer`

### 2. useState() Hook

**Purpose:** Creates a stateful variable and a setter function to update its value in the Virtual DOM.

**Syntax:**

```javascript
const [state, setState] = useState(initialValue);
```

**Example:**

```javascript
const [name, setName] = useState("Guest");
```

**Key Points:**

- Triggers a re-render when state changes
- Updates occur in the Virtual DOM
- Direct assignment (`name = "value"`) does NOT update state

### 3. onChange Event Handler

**Purpose:** Triggers a function every time the value of form elements changes.

**Supported Elements:**

- Text inputs
- Number inputs
- Select dropdowns
- Radio buttons
- Checkboxes

**Example:**

```javascript
function handleNameChange(event) {
  setName(event.target.value);
}
```

### 4. Updater Functions (Advanced Pattern)

**Definition:** A function passed to `setState()` that safely updates state based on previous state.

**Why Use Updater Functions:**

- Prevents bugs with multiple state updates
- React queues updater functions in order
- Handles asynchronous operations safely
- Best practice for maintainability

**Without Updater Function:**

```javascript
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// Result: count = 1 (only updated once)
```

**With Updater Function:**

```javascript
setCount((c) => c + 1);
setCount((c) => c + 1);
setCount((c) => c + 1);
// Result: count = 3 (updated three times)
```

## Practical Applications

- **MyComponent.jsx:** Basic useState with strings, numbers, and booleans
- **Form.jsx:** onChange handlers for text input, number input, select, and radio buttons
- **ColorPicker.jsx:** Interactive color picker using useState and onChange
- **Counter.jsx:** Updater functions for safe state management
