import React, { useState } from "react";
import "./CartComponent.css";

function CartComponent(props) {
  const Data = props.dataArr;
  const setData = props.setDataArr;

  const handleEdit = (event) => {
    const Index = event.target.getAttribute("data-index");
    const record = Data[Index];

    const setname = props.setNameInput;
    const setdiscription = props.setDisInput;

    setname(record.name);
    setdiscription(record.discription);

    setData(Data.filter((item, index) => Index != index));
  };

  const handleDelete = (event) => {
    const Index = event.target.getAttribute("data-index");
    setData(Data.filter((item, index) => Index != index));
  };

  const handledropdown = (value) =>{
    const select = document.getElementById('dropdown');
    console.log(select.value);
  }
  return (
    <>
      <div className="ToDocart-display ">
        <div>ToDo</div>
        <div id="card-group">
          {Data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <div>
                  <p className="card-text">Name: {item.name}</p>
                  <p className="card-text">Discription: {item.discription}</p>
                  <label htmlFor="dropdown">Status: </label>
                  <select className="dropdown" id="dropdown" onChange={()=>handledropdown(value)}>
                    <option value="Not-Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <br />
                  <button
                    className="btn btn-success m-2"
                    data-index={index}
                    onClick={() => handleEdit(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    data-index={index}
                    onClick={() => handleDelete(event)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CartComponent;
