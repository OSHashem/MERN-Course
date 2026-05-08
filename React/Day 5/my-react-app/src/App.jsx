import Counter from "./Counter.jsx";
import Dimension from "./Dimension.jsx";
import ComponentA from "./ComponentA.jsx";
import MyComponent from "./MyComponent.jsx";
import Stopwatch from "./Stopwatch.jsx";
import DigitalClock from "./DigitalClock.jsx";

function App() {
  return (
    <>
      <h1 id="topic">UseEffect() Hook</h1>

      <Counter></Counter>

      <br />
      <br />

      <Dimension></Dimension>

      <hr />

      <h1 id="topic">digital clock with React! </h1>
      <DigitalClock></DigitalClock>
      
      <hr />
      


      <h1 id="topic">useContext() hook</h1>

      <ComponentA></ComponentA>

      <hr />
      <h1 id="topic">useRef() hook</h1>

      <MyComponent></MyComponent>

      <hr />
      <h1 id="topic">Stopwatch with React!</h1>

      <Stopwatch></Stopwatch>
    </>
  );
}

export default App;
