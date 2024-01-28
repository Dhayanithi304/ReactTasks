import { useState } from "react";
import React from 'react'

export function Head() {
    
  const [isClicked, setIsClicked] = useState(true);
  const [count, setcount] = useState(0);

  function countIncrease() {
    console.log('clicked');
    setcount(count + 1);
    setIsClicked(false);
  };

  const countdecrease = () => {
    console.log('clicked');
    setcount(count - 1);
    setIsClicked(true);
  };

  return (
    <div>
        <div>
          <h5>cart {count}</h5>
        </div>
      </div>
  )
}

export default Head