import React, { useContext, useRef, useState } from "react";
import { Context } from "./Context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function List() {
  const { data, setData } = useContext(Context);
  // const [input, setInput] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const handleEdit = (id, index) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, isClicked: !item.isClicked } : item
    );
    setData(newData);
    // Callback(index);
    // setInput({...input, name: newlist.name, email: newlist.email, phone: newlist.phone });
    // console.log("input",input);
  };

  // const inputBack = (index) => {
  //   var newlist = data[index];
  //   name.current.value = newlist.name;
  //   email.current.value = newlist.email;
  //   phone.current.value = newlist.phone;
  // };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  const handleUpdate = (id, index) => {
    const newData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            isClicked: !item.isClicked,
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value
          }
        : item
    );
    setData(newData);
    console.log(data);
    
  };

  return (
    <div className="table-responsive">
      <table className="table border-secondary table-bordered table-hover">
        <thead>
          <tr>
            <th className="th">S.No.</th>
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">Phone Number</th>
            <th className="th">Action</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                {item.isClicked ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setData(data.map((item)=>{[...item, {name: e.target.value}] }))}
                    className="border text-dark bg-light border-1 border-secondary rounded-2"
                  ></input>
                ) : (
                  item.name
                )}
              </td>
              <td>
                {item.isClicked ? (
                  <input
                  type="email"
                    value={item.email}
                    onChange={(e) => setData(data.map((item)=>{[...item, {email: e.target.value}] }))}
                    className="border text-dark bg-light border-1 border-secondary rounded-2"
                  ></input>
                ) : (
                  item.email
                )}
              </td>
              <td>
                {item.isClicked ? (
                  <input
                  type="text"
                    value={item.phone}
                    onChange={(e) => setData(data.map((item)=>{[...item, {phone: e.target.value}] }))}
                    className="border text-dark bg-light border-1 border-secondary rounded-2"
                  ></input>
                ) : (
                  item.phone
                )}
              </td>
              <td>
                {!item.isClicked ? (
                  <>
                    <button
                      className="btn"
                      onClick={(e) =>handleEdit(item.id, index)}
                    >
                      <i className="fa fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa fa-trash-can"></i>
                    </button>
                  </>
                ) : (
                  <button
                    className="btn"
                    onClick={(e) => handleUpdate(item.id, index)}
                  >
                    <i className="fa fa-upload"></i>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
