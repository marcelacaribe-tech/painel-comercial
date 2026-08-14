import "./storagePolyfill.js";
import React from "react";
import ReactDOM from "react-dom/client";
import PainelCliente from "./PainelCliente.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PainelCliente />
  </React.StrictMode>
);
