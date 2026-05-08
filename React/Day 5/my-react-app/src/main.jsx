import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // Strict Mode is a development-only tool in React that highlights potential problems in an application without rendering any visible UI.
  // It activates additional checks and warnings for all its descendant components to help developers follow React's best practice
  <StrictMode>
    <App />
  </StrictMode>,
);
