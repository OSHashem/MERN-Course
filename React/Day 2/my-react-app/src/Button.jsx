// React Click Events

function Button(props) {
  // 1. Normal onClick attribute
  const handleClick = () => {
    console.log("Ouch");
  };

  //   return <button onClick={handleClick}>Click Me</button>;

  // 2. Handling an onclick event with parameters using an arrow function
  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me!`);
  };

  //   return <button onClick={() => handleClick2("John")}>Click Me</button>;

  // 3. Handling an onclick event + conditions using an arrow function
  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  //   return <button onClick={() => handleClick3("John")}>Click Me</button>;

  // 4. Handling events using an arrow function
  const handleClick4 = (event) => {
    console.log(event);
    event.target.textContent = "Ouch";
  };

  //   return <button onClick={(event) => handleClick4(event)}>Click Me</button>;

  // 5. Handling Double-click events using an arrow function
  //   let count = 0;
  const handleClick5 = (event) => {
    console.log(event);
    event.target.textContent = "Ouch";
  };

  //   return (
  //     <button onDoubleClick={(event) => handleClick5(event)}>Click Me</button>
  //   );

  // 6. Handling Hide an object on click event using an arrow function
  const handleClick6 = (event) => {
    console.log(event);
    event.target.style.display = "none";
  };

  return <button onClick={(event) => handleClick6(event)}>Click Me</button>;
}

export default Button;
