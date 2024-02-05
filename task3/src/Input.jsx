import React, { useState } from "react";
import CartComponent from "./CartComponent";
import "./Input.css";

function Input() {
  const [Data, setData] = useState([]);
  const [name, setname] = useState("");
  const [discription, setdiscription] = useState("");

  //get the name input value
  const handleInputChange1 = (event) => {
    setname(event.target.value);
  };

  //get the discription input value
  const handleInputChange2 = (event) => {
    setdiscription(event.target.value);
  };

  //function for save the input . it push values to an array they show us to card value
  const handleSave = () => {
    if (name == "") {
      alert("Atleast, Enter your Name");
      return false;
    }
    
    setData([...Data, { name, discription, status: "Incompleted" }]);
    setname("");
    setdiscription("");
  };

  return (
    <>
      <div className="container p-5">
        <div className="head-title">
          <h1 className="mb-3">ToDo Task</h1>
        </div>
        <div className="input-body-area mt-5">
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleInputChange1}
            />
          </div>
          <div>
            <label htmlFor="discription">Discription </label>
            <input
              type="text"
              id="discription"
              value={discription}
              onChange={handleInputChange2}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
            >
            Save
          </button>
        </div>
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
