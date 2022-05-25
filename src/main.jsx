import React from "react";
import RatingContextProvider from "./contexts/RatingContextProvider";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RatingContextProvider>
      <App />
    </RatingContextProvider>
  </React.StrictMode>
);
