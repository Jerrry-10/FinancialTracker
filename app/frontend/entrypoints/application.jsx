// frontend/entrypoints/application.js
import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App"; // Assuming App.jsx is still named as such

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
