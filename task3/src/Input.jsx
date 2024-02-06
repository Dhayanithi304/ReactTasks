import React, { useState } from "react";
import CartComponent from "./CartComponent";
import "./Input.css";

function Input() {
  const [Data, setData] = useState([]);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  //function for save the input . it push values to an array they show us to card value
  const handleSave = () => {
    if (name == "") {
      alert("Atleast, Enter your Name");
      return false;
    }
    const newData = {
      id: Date.now(),
      name: name,
      description: description,
      status: "Incompleted",
    };
    setData([...Data, newData]);
    setname("");
    setdescription("");
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
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description </label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
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
          Data={Data}
          setData={setData}
          setname={setname}
          setdescription={setdescription}
        />
      </div>
    </>
  );
}

export default Input;
