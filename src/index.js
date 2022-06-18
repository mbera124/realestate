import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./views/auth/components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
reportWebVitals();
