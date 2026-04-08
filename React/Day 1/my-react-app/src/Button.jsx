// HOW TO STYLE REACT COMPONENTS WITH CSS
// (not including external frameworks or preprocessors)

// 1. EXTERNAL. Great for global style or small projects.
// 2. MODULES. Preferred for individual components that have unique styling needs. Downsides that it requires an extra file and it can be a bit verbose to import the styles and use them in the component. However, it provides better encapsulation and avoids naming conflicts between styles.
// 3. INLINE. 

// Second Way: CSS Modules
// import styles from "./Button.module.css";
function Button() {
  // 3rd Way: Inline Styles
  // Convenient and easy to use for simple styles that are specific to a single component.
  // However, it can become cumbersome and less maintainable for larger and more complex styles, as it mixes the styling logic with the component logic.
  // Additionally, inline styles do not support pseudo-classes (like :hover) or media queries, which can limit their functionality in certain scenarios.
  const styles = {
    // In React, we use camelCase for CSS properties instead of kebab-case. For example, background-color becomes backgroundColor, and border-radius becomes borderRadius. This is because JavaScript does not allow hyphens in variable names, so we use camelCase to define CSS properties in JavaScript objects.
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 10px",
    cursor: "pointer",
  };
  return <button style={styles}>Click Me </button>;
}

export default Button;
