import React, { useContext, useRef, useState } from "react";
import { Context } from "./Context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function List() {
  const { data, setData } = useContext(Context);

  const handleEdit = (id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, isClicked: !item.isClicked } : item
    );
    setData(newData);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  const handleUpdate = (id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, isClicked: !item.isClicked } : item
    );
    setData(newData);
    
  };

  const handleSaveName = (id, value) => {
    setData(data.map(item => {
        if (item.id === id) {
            return { ...item, name: value };
        }
        return item;
    }));
};

  const handleSaveEmail = (id, value) => {
    setData(data.map(item => {
        if (item.id === id) {
            return { ...item, email: value };
        }
        return item;
    }));
};

  const handleSavePhone = (id, value) => {
    setData(data.map(item => {
        if (item.id === id) {
            return { ...item, phone: value };
        }
        return item;
    }));
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

        <tbody className="text-start align-middle">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="text-center fw-bold">{index + 1}</td>

              <td>
                {item.isClicked ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleSaveName( item.id ,e.target.value)}
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
                    onChange={(e) => handleSaveEmail( item.id ,e.target.value)}
                    className="border text-dark bg-light border-1 border-secondary rounded-2"
                  ></input>
                ) : (
                  item.email
                )}
              </td>
              <td>
                {item.isClicked ? (
                  <input
                    value={item.phone}
                    onChange={(e) => handleSavePhone( item.id, e.target.value)}
                    className="border text-dark bg-light border-1 border-secondary rounded-2"
                  ></input>
                ) : (
                  item.phone
                )}
              </td>
              <td className="d-flex justify-content-around">
                {!item.isClicked ? (
                  <>
                    <button
                      className="btn"
                      onClick={(e) =>handleEdit(item.id, index)}
                    >
                      <i className="fa fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn te"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa fa-trash-can"></i>
                    </button>
                  </>
                ) : (
                  <button
                    className="btn"
                    onClick={(e) => handleUpdate(item.id)}
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
