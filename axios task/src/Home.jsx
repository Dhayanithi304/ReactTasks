import React, { useContext } from "react";
import { Context } from "./Context";

function Home() {
  const { data, setData, nameRef, emailRef, phoneRef} = useContext(Context);

  const handleSubmit = () => {
    // if (input.name == "") {
    //   alert("Atleast, Enter your Name");
    //   return false;
    // }

    // const newData = {
    //   id: data.length + 1,
    //   name: input.name,
    //   email: input.email,
    //   phone: input.phone,
    // };
    // setData([...data, newData]);
    // setInput({
    //   name: "",
    //   email: "",
    //   phone: "",
    // });

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
    <div>
      <form className="text-start">
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
            // value={input.name}
            // onChange={(e) => setInput({ ...input, name: e.target.value })}
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
            // value={input.email}
            // onChange={(e) => setInput({ ...input, email: e.target.value })}
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
            // value={input.phone}
            // onChange={(e) => setInput({ ...input, phone: e.target.value })}
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
