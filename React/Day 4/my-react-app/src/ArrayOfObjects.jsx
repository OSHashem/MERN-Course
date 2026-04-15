import React, { useState } from "react";

function ArrayOfObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    // since we are not using the element parameter we will turn it into an "_" as a convention
    setCars((c) => c.filter((_, i) => i != index));
  }

  function handleYearChange(event) {
    setCarYear((c) => (c = event.target.value));
  }

  function handleMakeChange(event) {
    setCarMake((c) => (c = event.target.value));
  }

  function handleModelChange(event) {
    setCarModel((c) => (c = event.target.value));
  }

  return (
    <>
      <div>
        <ul>
          {cars.map((car, index) => (
            <li onClick={() => handleRemoveCar(index)} key={index}>
              {car.year}, {car.make}, {car.model}
            </li>
          ))}
        </ul>

        <input
          type="number"
          onChange={handleYearChange}
          placeholder="Enter Year"
          value={carYear}
        />
        <br />

        <input
          type="text"
          onChange={handleMakeChange}
          placeholder="Enter Make"
          value={carMake}
        />
        <br />

        <input
          type="text"
          onChange={handleModelChange}
          placeholder="Enter Model"
          value={carModel}
        />
        <br />

        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default ArrayOfObjects;
