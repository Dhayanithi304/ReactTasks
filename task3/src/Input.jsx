import React, { useState } from "react";
import CartComponent from "./CartComponent";

function Input() {
  const [name, setname] = useState("");
  const [discription, setdiscription] = useState("");

  const [Data, setData] = useState([]);

  const handleInputChange1 = (event) => {
    setname(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setdiscription(event.target.value);
  };

  const handleSave = () => {
    if (name == "") {
      alert("Atleast, Enter your Name");
      return false;
    }
    setData([...Data, { name, discription }]);
    setname("");
    setdiscription("");
  };

  return (
    <><div className="container mt-5">
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={name} onChange={handleInputChange1} />
      <label htmlFor="discription">Discription: </label>
      <input
        type="text"
        id="discription"
        value={discription}
        onChange={handleInputChange2}
      />
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={handleSave}
      >
        Save
      </button>
      <CartComponent
        dataArr={Data}
        setDataArr={setData}
        setNameInput={setname}
        setDisInput={setdiscription}
        />
        </div>
    </>
  );
}

export default Input;
