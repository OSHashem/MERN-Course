import React, { useState } from "react";
function Object() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    // Doing this will discard the other properties of the car object, and only update the year property
    // setCar({ year: 2025 });

    // We can use the spread operator to create a new object with the updated year
    // setCar({ ...car, year: event.target.value });
    // If we have the same property name in the new object, it will overwrite the previous value of that property

    // But for a more safer and better way to update the state, we can use a function inside the setCar function, which will give us the previous state as an argument, and we can return a new object with the updated year
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    // We can use the spread operator to create a new object with the updated make
    // setCar({ ...car, make: event.target.value });
    // If we have the same property name in the new object, it will overwrite the previous value of that property

    // But for a more safer and better way to update the state, we can use a function inside the setCar function, which will give us the previous state as an argument, and we can return a new object with the updated year
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    // We can use the spread operator to create a new object with the updated model
    // setCar({ ...car, model: event.target.value });
    // If we have the same property name in the new object, it will overwrite the previous value of that property

    // But for a more safer and better way to update the state, we can use a function inside the setCar function, which will give us the previous state as an argument, and we can return a new object with the updated year
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <>
      <div>
        <p>
          Your Favorite Car is: {car.year},{car.make},{car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>
    </>
  );
}

export default Object;
