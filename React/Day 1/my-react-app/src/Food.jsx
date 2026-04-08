function Food() {
  // You do not need curly braces to write JS code if it is outside of the return statement. 
  // However, if you want to write JS code within the return statement, you need to use curly braces {}.
  const food1 = "Banana";
  const food2 = "Orange";

  return (
    <ul>
      <li>Apple</li>
      <li>{food2}</li>
      <li>{food1.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
