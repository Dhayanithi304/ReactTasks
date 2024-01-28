// import React, { useState } from "react";

function Home(props) {
    let isClicked = props.isClicked 
  return (
    <>
      <div className="card">
        <img src="#" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <i className={props.className}></i>
          <i className={props.className}></i>
          <i className={props.className}></i>
          <i className={props.className}></i>
          <i className={props.className}></i>
          <p className="card-text">{props.price}</p>
          <p className="card-text">{props.rating}</p>
          {isClicked ? 
            <button onClick={props.countIncrease}>Add to cart</button>
           : 
            <button onClick={props.countdecrease}>Remove form cart</button>
          }
        </div>
      </div>
    </>
  );
}

export default Home;
