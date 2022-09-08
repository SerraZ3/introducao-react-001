import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Login />
  // </React.StrictMode>
);
