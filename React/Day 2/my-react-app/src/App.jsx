import List from "./List.jsx";
import Button from "./Button.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 85 },
    { id: 3, name: "Cherry", calories: 75 },
    { id: 4, name: "Date", calories: 65 },
  ];

  const veggies = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 85 },
    { id: 3, name: "Cherry", calories: 75 },
    { id: 4, name: "Date", calories: 65 },
  ];
  return (
    <>
      <h1 id="topic">Render Lists In React</h1>
      {/*conditional rendering using && (short ciruiting)*/}
      {fruits.length > 0 && <List items={fruits} category="fruits"></List>}
      {veggies.length > 0 && (
        <List items={veggies} category="vegetables"></List>
      )}

      <hr />

      <h1 id="topic">React Click Events </h1>

      <Button></Button>

    </>
  );
}

export default App;
