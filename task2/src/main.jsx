import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import { useState } from "react";

const [isClicked, setIsClicked] = useState(true);
const [count, setcount] = useState(0);

function countIncrease() {
  console.log("clicked");
  setcount(count + 1);
  setIsClicked(false);
}

const countdecrease = () => {
  console.log("clicked");
  setcount(count - 1);
  setIsClicked(true);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <h5>cart {count}</h5>
    </div>
    <Home
      name="prodect"
      price="$40.00"
      function1={countIncrease}
      function2={countdecrease}
      isClicked={isClicked}
    />
    <Home name="special prodect" price="$30.00" className="fa fa-star" />
  </React.StrictMode>
);
