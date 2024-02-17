import All from "./All";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FSD from "./FSD";
import DS from "./DS";
import CyberSecurity from "./CyberSecurity";
import Carrer from "./Carrer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="container mt-4">
          <nav className="nav-bar">
            <Link to="/" className="Link">
              ALL
            </Link>
            <Link to="/full-stack-development" className="Link">
              FULL STACK DEVELOPMENT
            </Link>
            <Link to="/data-science" className="Link">
              DATA SCIENCE
            </Link>
            <Link to="/cyber-security" className="Link">
              CYBER SECURITY
            </Link>
            <Link to="/carrer" className="Link">
              CARRER
            </Link>
          </nav>
          <div id="cards-g">
            <Routes>
              <Route path="/" exact Component={All}></Route>
              <Route
                path="/full-stack-development"
                exact
                Component={FSD}
              ></Route>
              <Route path="/data-science" exact Component={DS}></Route>
              <Route
                path="/cyber-security"
                exact
                Component={CyberSecurity}
              ></Route>
              <Route path="/carrer" exact Component={Carrer}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
