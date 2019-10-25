import React from "react";
import ReactDOM from "react-dom";
import ItemCard from "./results/ItemCard";

import "./results/styles.scss";

function App() {
  return (
    <div className="App">
      <ItemCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
