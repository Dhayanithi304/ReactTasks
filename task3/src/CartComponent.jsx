import React, { useState } from "react";
import "./CartComponent.css";

function CartComponent(props) {
  const Data = props.Data;
  const setData = props.setData;
  const [isDialogOpen, setDialogOpen] = useState(false);

  //handkeEdit function for transfer the cards value to input area for edit the value
  const handleEdit = (event) => {
    const Index = event.target.getAttribute("data-index");
    const record = Data[Index];
    props.setname(record.name);
    props.setdescription(record.description);
    setData(Data.filter((item, index) => Index != index));
  };

  //handleDelete function for delete the card from the card group
  const handleDelete = (event) => {
    const Index = event.target.getAttribute("data-index");
    setData(Data.filter((item, index) => Index != index));
  };

  //open the dialog panel
  const openDialog = () => {
    setDialogOpen(true);
  };

  const handleStatusChange = (id, newStatus) => {
    const updateCards = Data.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setData(updateCards);
  };

  const handleRemoveDialog = (id) => {
    const updateCards = Data.map((item) =>
    item.id === id ? { ...item, status: "Incompleted" } : item
  );
  setData(updateCards);

  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className="ToDocart-display position-relative">
        <div className="cards-header d-flex justify-content-between align-items-center">
          <h5>ToDo</h5>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => openDialog()}
          >
            Status
          </button>
        </div>
        <div id="card-group">
          {Data.map((item, index) => (
            <div className="card" key={item.id}>
              <div className="card-body">
                <div className="card-content">
                  <p className="card-text">Name: {item.name}</p>
                  <p className="card-text">Description: {item.description}</p>
                </div>
                <div>
                  <select
                    id="select"
                    data-index={index}
                    value={item.status}
                    onChange={(event) =>
                      handleStatusChange(item.id, event.target.value)
                    }
                  >
                    <option value="Incompleted">Incompleted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="btn-div">
                  <button
                    className="btn editbtn m-2"
                    data-index={index}
                    onClick={(event) => handleEdit(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn removebtn m-2"
                    data-index={index}
                    onClick={(event) => handleDelete(event)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {isDialogOpen && (
            <div className="dialog position-absolute">
              <div className="dialoghead">
                <button className="Xbtn" onClick={closeDialog}>
                  <i className="fa fa-circle-xmark"></i>
                </button>
                <h4>Completed Tasks</h4>
              </div>
              <div className="dialog-content">
                {Data.filter((item) => item.status === "Completed").map(
                  (item) => (
                    <div className="d-c" key={item.id}>
                      <p className="content">
                        <span> Name:</span> {item.name},
                        <span> Description:</span>
                        {item.description},<span> Status:</span> {item.status}
                      </p>
                      <button
                        className="btn removebtn"
                        onClick={(e) => handleRemoveDialog(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartComponent;
