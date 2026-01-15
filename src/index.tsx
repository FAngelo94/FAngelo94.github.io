import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CookieConsent from "./components/CookieConsent/CookieConsent";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CookieConsent />
  </React.StrictMode>,
  document.getElementById("root")
);
