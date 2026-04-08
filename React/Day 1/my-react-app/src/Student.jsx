import PropTypes from "prop-types";

// props =  read-only properties that are shared between components.
// A parent component can send data to a child component.
// <Component key=value />

// In this example, the app is the parent and the student is the child.

// When sending data to a child component, we can use props to pass the data as an argument to the child component.
// The child component can then access the data using the props object.
// This allows us to create reusable components that can be customized with different data.

function Student({ name = "Guest", age = 0, isStudent = false }) { // Destructuring props object to access the values directly without using props.key
  return (
    <div className="student">
      {/* To acess the value of any key we use props.key */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {/* With boolean values we use ternary operator */}
      <p>isStudent: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// Format: key: PropTypes.dataType
// If it happened that we passed a value of the wrong datatype, we will get a warning in the console, but the app will still work.
// This is because propTypes is a development tool that helps us catch errors and improve the quality of our code, but it does not affect the functionality of the app in production.
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};

// defaultProps = default values for props in case they are not passed from the parent component
// name: "Guest"

export default Student;
