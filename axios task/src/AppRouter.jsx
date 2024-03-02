import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import Home from "./Home";

function AppRouter() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-sm bg-light justify-content-between position-fixed top-0 w-100vw">
          <div className="container-fluid">
            <div className="navbar-nav">
              <h1 className="h1">List Out</h1>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link to="/">
                  <i className="fa fa-home"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/List">
                  <i className="fa fa-list"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/List" Component={List} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
