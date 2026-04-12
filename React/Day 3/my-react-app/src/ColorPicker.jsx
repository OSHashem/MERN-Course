// This program serves as an exercise to practice using the useState hook and the onChange event handler.

import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }
  
  return (
    <>
      <div className="color-picker-container">
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color} </p>
        </div>
        <label>Select a Color:</label>
        <input type="color" onChange={handleColorChange} value={color} />
      </div>
    </>
  );
}

export default ColorPicker;
