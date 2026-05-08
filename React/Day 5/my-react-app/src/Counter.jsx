// useEffect() = React Hook that tells React to DO THIS CODE WHEN: (pick one)
// This component re-renders
// This component mounts, that is when you create and append it to the DOM
// The state of a value changes

// FORM: useEffect(function, [dependencies])
// EXAMPLE 1: useEffect(() => {}) // Runs after every re-render
// EXAMPLE 2: useEffect(() => {},[]) // Runs only on mount
// EXAMPLE 3: useEffect(() => {},[value]) // Runs on mount + when this specific value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts, it is when u remove a component from the DOM.

import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // EXAMPLE 1: useEffect(() => {}) // Runs after every re-render
  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // });

  // EXAMPLE 2: useEffect(() => {},[]) // Runs only on mount (It is better used when u only need it one time)
  // useEffect(() => {
  //   document.title = `My Counter Program`;
  // });

  // EXAMPLE 3: useEffect(() => {},[value]) // Runs on mount + when this specific value changes for any reason possible
  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);

  // EXAMPLE 4: useEffect(() => {},[value]) // multiple dependencies (when any of the values in the array change)
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  // If we removed the useEffect the code block will run every time the component renders.
  // If no dependecies, you could add cleanup Logic: You can return a function from the effect to clean up resources (like clearing timers or unsubscribing from events) to prevent memory leaks
  // It would help also be helpful in more advanced situations

  function addCount() {
    // Updating state with useState triggers a re-render of the entire component where the state is defined, as well as all of its child components by default.
    setCount((c) => c + 1);
  }

  function substractCount() {
    // Updating state with useState triggers a re-render of the entire component where the state is defined, as well as all of its child components by default.
    setCount((c) => c - 1);
  }

  function changeColor() {
    // Updating state with useState triggers a re-render of the entire component where the state is defined, as well as all of its child components by default.
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={substractCount}>Substract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default Counter;
