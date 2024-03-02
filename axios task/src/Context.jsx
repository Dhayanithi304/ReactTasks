import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";

const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState(null);
  // const [input, setInput] = useState({
  //   name:"", email: "", phone:""
  // });
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });

    if (data !== null) {
      const updatedItems = data.map((item) => {
        return { ...item, isClicked: true }
      })
      setData(updatedItems);
    }
    
  },[]);

  if (!data) return null;

  return (
    <Context.Provider value={{ data, setData, nameRef, emailRef, phoneRef }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
