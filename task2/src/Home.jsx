import React from "react";
import { useState } from "react";

function Home() {
  let [isClicked, setIsClicked] = useState(true);
  let [count, setcount] = useState(0);

  const countIncrease = () => {
    console.log("clicked");
    setcount(count + 1);
    setIsClicked(false);
  };

  const countdecrease = () => {
    console.log("clicked");
    setcount(count - 1);
    setIsClicked(true);
  };

  return (
    <div>
      <div>
        <h6>Cart {count}</h6>
      </div>
        <div className="card">
          <img src="#" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <i className="fa fa-star"></i>
            <p className="card-text">{item.price}</p>
            <p className="card-text">edsyhga</p>
            {isClicked ? (
              <button onClick={countIncrease}>Add to cart</button>
            ) : (
              <button onClick={countdecrease}>Remove form cart</button>
            )}
          </div>
        </div>
    </div>
  );
}

export default Home;
