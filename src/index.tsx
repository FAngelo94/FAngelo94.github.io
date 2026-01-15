import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Initialize Firebase (analytics) - side-effect import
import "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
