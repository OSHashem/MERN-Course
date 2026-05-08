# Day 5: React Hooks & Components Summary

## Overview

This day covers essential React hooks (`useEffect`, `useRef`, `useContext`) and practical component implementations including a digital clock and stopwatch.

---

## 1. useEffect() Hook

### Purpose

React Hook that executes code at specific lifecycle moments:

- After every re-render
- On component mount
- When specific state values change

### Syntax & Examples

```javascript
useEffect(() => {}); // Runs after every re-render
useEffect(() => {}, []); // Runs only on mount
useEffect(() => {}, [value]); // Runs on mount + when value changes
useEffect(() => {}, [dep1, dep2]); // Runs when any dependency changes
```

### Key Use Cases

1. Event Listeners
2. DOM manipulation
3. Subscriptions (real-time updates)
4. Fetching data from APIs
5. Cleanup when component unmounts

### Cleanup Function

```javascript
useEffect(() => {
  // Setup code
  return () => {
    // Cleanup code (prevents memory leaks)
  };
}, [dependencies]);
```

---

## 2. useRef() Hook

### Purpose

"Use Reference" - stores mutable values that persist across re-renders **without triggering re-renders**.

### Key Differences from useState()

| Feature           | useState | useRef |
| ----------------- | -------- | ------ |
| Causes Re-render  | Yes      | No     |
| Value Persistence | Yes      | Yes    |
| Mutable           | No       | Yes    |

### Main Applications

1. Accessing/Interacting with DOM elements
2. Handling Focus, Animations, and Transitions
3. Managing Timers and Intervals

### Example

```javascript
const ref = useRef(0); // Returns {current: 0}
const inputRef = useRef(null); // Reference to DOM element

inputRef.current.focus(); // Interact with DOM
inputRef.current.style.backgroundColor = "yellow";
```

---

## 3. useContext() Hook

### Purpose

Share values between multiple levels of components without **prop drilling** (passing props through every level).

### Implementation

#### Provider (Component with data)

```javascript
export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Omar");

  return (
    <UserContext.Provider value={user}>
      <ComponentB />
    </UserContext.Provider>
  );
}
```

#### Consumer (Component using data)

```javascript
function ComponentD() {
  const user = useContext(UserContext);
  return <h2>{`Bye ${user}`}</h2>;
}
```

### Benefits

- Eliminates prop drilling across multiple component levels
- Cleaner, more maintainable code structure
- Easier state sharing across components

---

## 4. Components Built

### A. DigitalClock Component

**Features:**

- Displays current time in 12-hour format with AM/PM
- Updates every 1 second using `useEffect`
- Auto-cleanup of interval on unmount
- Formatted time: `HH:MM:SS AM/PM`

**Key Code:**

```javascript
const [time, setTime] = useState(new Date());
useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(new Date());
  }, 1000);
  return () => clearInterval(intervalId);
}, []);
```

### B. Stopwatch Component

**Features:**

- Precise time tracking in milliseconds
- Start, Stop, and Reset functionality
- Displays: `HH:MM:SS:MS` format
- Uses `useRef` for interval management
- Smooth state updates with `useEffect`

**Key Code:**

```javascript
const [isRunning, setIsRunning] = useState(false);
const [elapsedTime, setElapsedTime] = useState(0);
const intervalIdRef = useRef(null);
const startTimeRef = useRef(0);
```

### C. Counter Component

**Features:**

- Increment/Decrement functionality
- Color toggle (Green/Red)
- Updates document title with count and color
- Demonstrates multiple dependencies in `useEffect`

### D. Dimension Component

**Features:**

- Tracks window width and height
- Updates on window resize
- Event listener cleanup on unmount
- Prevents memory leaks using cleanup function
- Multiple `useEffect` hooks example

### E. Context Components (A, B, C, D)

**Demonstrates:**

- useContext hook for state sharing
- Multi-level component tree
- Props drilling vs Context alternative
- Context provider and consumer pattern

---

## Learning Outcomes

- Mastered `useEffect` hook for lifecycle management
- Understood `useRef` for DOM access without re-renders
- Implemented `useContext` for state sharing
- Built real-world components (Clock, Stopwatch)
- Practiced cleanup functions and memory leak prevention
- Learned component composition and prop drilling alternatives
