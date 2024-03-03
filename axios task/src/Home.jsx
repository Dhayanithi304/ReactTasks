import React, { useContext } from "react";
import { Context } from "./Context";

function Home() {
  const { data, setData, nameRef, emailRef, phoneRef } = useContext(Context);

  const handleSubmit = () => {
    const newData = {
      id: data.length + 1,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    setData([...data, newData]);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    console.log(data);
  };

  return (
    <div className="w-100" style={{width : '100em' }}>
      <form className="text-start w-100 d-flex flex-column">
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter your Name"
            name="name"
            ref={nameRef}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Phone Number:
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Enter Phone Number"
            name="number"
            ref={phoneRef}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Home;
