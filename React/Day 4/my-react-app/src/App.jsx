import Object from "./Object.jsx";
import Array from "./Array.jsx";
import ArrayOfObjects from "./ArrayOfObjects.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  return (
    <>
      <h1 id="topic">Update OBJECTS in state</h1>

      <Object></Object>

      <hr />
      <h1 id="topic">Update ARRAYS in state</h1>

      <Array></Array>

      <hr />
      <h1 id="topic">Update ARRAY Of Objects in state</h1>

      <ArrayOfObjects></ArrayOfObjects>

      <hr />
      <h1 id="topic">to-do-list app with React!</h1>

      <ToDoList></ToDoList>
    </>
  );
}

export default App;
