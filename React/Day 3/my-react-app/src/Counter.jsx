// updater function = A function passed as an argument to setState() usually
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions.
// Even when you are going to update once and you might update more than once in the future, it will prevent bugs and make your code more readable and maintainable.
// Example:
// Before: setCount(count+1)
// After: setCount(updater Function aka arrow function)

import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  //   EXAMPLE 1: Increment Counter
  function increment() {
    // A. Traditional Way:
    // Uses the current state to calulate the next state.
    // Set Functions do not trigger an update
    // React batches state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // What basically happens is:
    // setCount(0 + 1);
    // setCount(0 + 1);
    // setCount(0 + 1);
    // So the count variable is not updated until the next render, so it will always be 0 in the above code, and the count will be updated to 1 in the next render.

    // B. Using an updater function aka arrow function:
    // Takes The PENDING state to calculate the next state.
    // React puts your updater fuunction in a queue (waiting in line).
    // During the next render, it will call them in the same order.

    // By convention, the parameter of the updater function is usually named "c" for count, but it can be named anything.
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1); // The c here represents the previous count

    // This also works
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <>
      <div>
        <p>Count:{count}</p>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default Counter;
