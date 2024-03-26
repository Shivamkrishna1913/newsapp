import React from "react";
import { Link } from "react-router-dom";
//type rcep for react class compo with props...
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <Link className={`nav-brand ${loc === "/general" ? "active" : ""}`}  to="/">
            News-WEB-App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${loc === "/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${loc === "/business" ? "active" : ""}`} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${loc === "/entertainment" ? "active" : ""}`} to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link  className={`nav-link ${loc === "/health" ? "active" : ""}`} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${loc === "/general" ? "active" : ""}`} to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${loc === "/science" ? "active" : ""}`} to="/science ">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${loc === "/sports" ? "active" : ""}`} to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${loc === "/technology" ? "active" : ""}`} to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
