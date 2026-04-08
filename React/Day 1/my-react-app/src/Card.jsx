// Card components = typically used to create a reusable and structured UI element for displaying content.
import profilePic from "./assets/profile.png";
function Card() {
  // Class is a special attribute in HTML that allows us to apply CSS styles to elements.
  // In React, we use "className" instead of class to avoid conflicts with the JavaScript reserved keyword "class".
  // The className attribute is used to specify one or more class names for an element, which can be used to apply CSS styles defined in an external stylesheet or within a style tag.
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture" />
      <h2 className="card-title">Omar</h2>
      <p className="card-text">I am Full Stack Engineer</p>
    </div>
  );
}
export default Card;
