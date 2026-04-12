// React hook = Special function that allows functional components to use React features without writing class components
// (useState (Mostly Used), useEffect, useContext, useReducer, and more...)

// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM.
// [name, setName]

import React, { useState } from "react";

function MyComponenet() {
  // 1. update a string
  // With the useState() function we can pass an initial state.
  const [name, setName] = useState("Guest");

  // 2. increment/updated a number
  const [age, setAge] = useState(0);

  // 3. toggle a boolean
  const [isEmployed, setIsEmployed] = useState(false);

  // Update/Change the name variable
  const updateName = () => {
    // This will not update the name variable in the Virtual DOM, it will only update the name variable in the function scope, which is not what we want.
    // name = "SpongeBob";
    // console.log(name);

    // When using the setter function of a stateful variable it will trigger a re-render of the component and update the value of the stateful variable in the Virtual DOM.
    setName("SpongeBob");
  };

  //   Update/Change the age variable
  const updateAge = () => {
    // When using the setter function of a stateful variable it will trigger a re-render of the component and update the value of the stateful variable in the Virtual DOM.
    setAge(age + 3);
  };

  //   Update/Change the isEmployed variable
  const toggleEmploymentStatus = () => {
    // When using the setter function of a stateful variable it will trigger a re-render of the component and update the value of the stateful variable in the Virtual DOM.
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button className="useState" onClick={updateName}>
        Set Name
      </button>

      <p>Age: {age}</p>
      <button className="useState" onClick={updateAge}>
        Set Age
      </button>

      <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
      <button className="useState" onClick={toggleEmploymentStatus}>
        Toggle Status
      </button>
    </div>
  );
}

export default MyComponenet;
