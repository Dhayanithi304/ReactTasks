import React, { useContext } from "react";
import { Context } from "./Context";

function Header() {
  const { cart } = useContext(Context);

  return (
    <header className="d-flex justify-content-between align-items-center position-sticky top-0 bg-light px-0 py-2 mt-0 mb-4 header">
      <div className="branding-area">
        <h1 className="display-3 m-0 p-0">
          PHONE'z <small>LAND</small>
        </h1>
      </div>
      <div className="count-area">
        <i className="fa fa-cart-shopping"></i>
        <span className="cart-count ms-2 ">{cart}</span>
      </div>
    </header>
  );
}

export default Header;
