// onChange = Event handler used primarily with form elements.
// Triggers a function every time the value of the input changes.

import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("Guest"); // Intial state of the name variable is "Guest"

  const [age, setAge] = useState(1); // Intial state of the name variable is "Guest"

  const [payment, setPayment] = useState("Visa");

  const [delivery, setDelivery] = useState("Delivery");

  //   1. Using onChange with input elements

  //   EXAMPLE 1: String input
  //  This will update the name variable in the Virtual DOM every time the value of the input changes.
  //  It will also update the value of the name variable in the function scope.
  function handleNameChange(event) {
    setName(event.target.value);
  }

  //   EXAMPLE 2: Number input
  //   We cn also do the same thing with numbers
  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  // 2. Using onChange with Select elements (DropDown Menu)
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  // 3. Using onChange with radio elements (Radio Buttons)
  function handleDeliveryChange(event) {
    setDelivery(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={age} onChange={handleAgeChange} type="number" />
      <p>Age: {age}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="PayPal">PayPal</option>
      </select>
      <p>Payment Method: {payment}</p>
      {/* In HTML, the checked attribute is used to pre-select a checkbox or radio button when a webpage loads. 
      It is a boolean attribute, meaning its mere presence in the tag makes the element "checked" */}
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={delivery === "Delivery"}
          onChange={handleDeliveryChange}
        />
        Delivery
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={delivery === "Pick Up"}
          onChange={handleDeliveryChange}
        />
        Pick Up
      </label>
      <p>Shipping Method: {delivery}</p>
    </div>
  );
}

export default Form;
