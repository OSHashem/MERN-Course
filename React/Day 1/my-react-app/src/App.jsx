import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";

// console.log(Student.propTypes.name);

function App() {
  return (
    // The best thing about REACT is that we can use the same component multiple times in our app.
    // Since we can only return one element, we can wrap the header and footer in a div or a React Fragment.
    <>
      <Header></Header>
      <h1 id="topic">React Tutorial</h1>
      <Food></Food>
      <hr />
      <h1 id="topic">Card Components</h1>

      <Card></Card>
      <hr />

      <h1 id="topic">React js how to add CSS styles</h1>
      <p>1. EXTERNAL</p>
      <p>2. MODULES</p>
      <p>3. INLINE</p>

      <Button></Button>
      <hr />

      <h1 id="topic">PROPS in React</h1>
      {/* Strings are stored as a literal value */}
      {/* While any other data type is stored in curly braces */}
      <Student name="SpongeBob" age={"25"} isStudent={true}></Student>
      <Student name="Patrick" age={35} isStudent={false}></Student>
      <Student />

      <hr />

      <h1 id="topic">CONDITIONAL RENDER in React</h1>

      <UserGreeting isLoggedIn={true} username="John"></UserGreeting>
      <UserGreeting ></UserGreeting>


      <Footer></Footer>
    </>
  );
}

export default App;
