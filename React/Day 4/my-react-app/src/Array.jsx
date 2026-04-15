import React, { useState } from "react";

function Array() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("FoodInput").value;

    setFoods((f) => [...f, newFood]);

    document.getElementById("FoodInput").value = "";
  }

  //   We will use the index here to find/filter the food and remove it
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i != index));
  }

  return (
    <>
      <div>
        <ul>
          {foods.map((food, index) => (
            <li onClick={() => handleRemoveFood(index)} key={index}>
              {food}
            </li>
          ))}
        </ul>
        <input type="text" id="FoodInput" placeholder="Enter Food Name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}

export default Array;
