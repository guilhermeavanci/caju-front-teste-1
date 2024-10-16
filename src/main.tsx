import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import reportAccessibility from "./utils/reportAccessibility";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

reportAccessibility(React)