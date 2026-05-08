// useEffect()
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one)
// This component re-renders
// This component mounts
// The state of a value changes

import React, { useState, useEffect, use } from "react";
function Dimension() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // EXAMPLE 1: without UseEffect
  //   window.addEventListener("resize", handleResize);
  //   console.log("event list");
  //   Doing so will add an event listener each time we resize/re-render

  // EXAMPLE 2: with UseEffect (to add the event listener once only on mount)
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event list added");

    // CleanUp; Do this code when either befroe the next re-render or when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event list removed");
    };
  }, []);

  // EXAMPLE 3: Multiple UseEffect (You can have more than one useEffect hook in your component)
  useEffect(() => {
    document.title = `size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}

export default Dimension;
