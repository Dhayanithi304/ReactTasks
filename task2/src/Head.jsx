import React from "react";

function Head() {
  // let [isClicked, setIsClicked] = useState(true);
  const isClicked = true; 
  let [count, setcount] = useState(0);

  const countIncrease = ()=> {
    console.log("clicked");
    setcount(count + 1);
    setIsClicked(false);
  }

  const countdecrease = ()=> {
    console.log("clicked");
    setcount(count - 1);
    setIsClicked(true);
  };

  return (
    <div>
      <div>
        <h5>cart {count}</h5>
      </div>
    </div>
  );
}

export default Head;
