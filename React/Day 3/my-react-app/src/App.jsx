import MyComponenet from "./MyComponent.jsx";
import Form from "./Form.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <h1 id="topic"> React useState() hook</h1>

      <MyComponenet></MyComponenet>

      <hr />
      <h1 id="topic"> React onChange event handler</h1>

      <Form></Form>

      <hr />
      <h1 id="topic"> Color Picker App With React</h1>

      <ColorPicker></ColorPicker>

      <hr />
      <h1 id="topic"> React updater functions</h1>

      <Counter></Counter>
    </>
  );
}

export default App;
