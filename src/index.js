import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Flames } from "./Flames";

function App() {
  return (
    <div className="App">
      <Flames />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
