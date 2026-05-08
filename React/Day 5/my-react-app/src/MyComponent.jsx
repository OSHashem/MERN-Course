// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" Does not cause re-renders when its value changes
// When you want a component to "remember" some information, but you do not want to trigger new renders.

// Uses/applications
// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  // let [number, setNumber] = useState(0);

  //   useRef() returns an object, an object that has one property, a property of current
  const ref = useRef(0); // Intial value is 0

  const inputRef = useRef(null); // Intial value is 0

  console.log(ref);
  //   Output: {current:0}

  useEffect(() => {
    console.log("Component Rendered");

    console.log(inputRef); //Output: a ref to the HTML input element
  });

  //   EXAMPLE 1: We will use the useState() first to show the differnce

  //   Here each time we click the button the value changes thus causing the component to re-render.
  // This will also trigger the useEffect() function each re-render
  //   function handleClick() {
  //     setNumber((n) => n + 1);
  //   }

  //   EXAMPLE 2: We will use the useRef()
  //   This won't render the whole component
  //   function handleClick() {
  //     ref.current++;
  //     console.log(ref.current);
  //   }

  //   EXAMPLE 2: We will use the useRef() with html ref attribute to be able to modify the html as we like
  //   We can do the same with multiple html elements to
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
      {/* The ref attribute of an HTML element it is a special attribute used to create refrences to elements  */}
      <input ref={inputRef} />
    </>
  );
}

export default MyComponent;
