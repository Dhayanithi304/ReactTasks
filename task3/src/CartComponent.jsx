import React, { useState } from "react";
import "./CartComponent.css";

function CartComponent(props) {
  const Data = props.dataArr;
  const setData = props.setDataArr;
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialog, setDialog] = useState([]);

  //handkeEdit function for transfer the cards value to input area for edit the value  
  const handleEdit = (event) => {
    const Index = event.target.getAttribute("data-index");
    const record = Data[Index];

    const setname = props.setNameInput;
    const setdiscription = props.setDisInput;

    setname(record.name);
    setdiscription(record.discription);

    setData(Data.filter((item, index) => Index != index));
  };

  //handleDelete function for delete the card from the card group
  const handleDelete = (event) => {
    const Index = event.target.getAttribute("data-index");
    setData(Data.filter((item, index) => Index != index));
    setDialog(dialog.filter((item, index) => Index != index));
  };

  //open the dialog panel
  const openDialog = () => {
    setDialogOpen(true);
  };

  const handleDialogChange = (event, name, discription) => {
    const Index = event.target.getAttribute("data-index");

    if (event.target.value == "Completed") {
      Data[Index].status = "Completed";
      setDialog([...dialog, { name, discription, status: Data[Index].status }]);
      console.log("textttttt",dialog);
    }

    event.target.value == "Incompleted"
      ? setDialog(
          dialog.filter((item, index) => {name != item.name && discription != item.discription}),
          // dialog.filter((item, index) => {i != index})
          Data[Index].status = "Incompleted"
        )
      : dialog;
  };

  const handleRemoveDialog = (event, select) => {
    const Index = event.target.getAttribute("data-index");
    setDialog(dialog.filter((item, index) => {Index != index;}));
    // (event.target.document.getElementById("select")).value = "Incompleted";
    console.log(select);
    select.value = "Incompleted";   
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
            <div className="card" key={index}>
              <div className="card-body">
                <div className="card-content">
                  <p className="card-text">Name: {item.name}</p>
                  <p className="card-text">Discription: {item.discription}</p>
                </div>
                <div>
                  <select
                    id="select"
                    data-index={index}
                    value={item.status}
                    onChange={(event) =>handleDialogChange(event, item.name, item.discription)}>
                    <option value="Incompleted">Incompleted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
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
          {isDialogOpen && (
            <div className="dialog position-absolute">
              <button className="Xbtn" onClick={closeDialog}>
                <i className="fa fa-circle-xmark"></i>
              </button>
              <div className="dialog-content">
                {dialog.map((item, index) => (
                  <div className="d-c" key={index}>
                    <p className="content">
                      <span> Name:</span> {item.name},<span> Discription:</span>{" "}
                      {item.discription}
                    </p>
                    <button
                      className="btn btn-danger"
                      data-index={index}
                      onClick={() => handleRemoveDialog(event, event.target.document.getElementById('select'))}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartComponent;
