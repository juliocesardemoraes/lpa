import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let myfunction = function () {
  console.log("teste");
};

console.log(myfunction());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
