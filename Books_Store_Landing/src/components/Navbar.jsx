import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="#" style={{ color: "white" }}>
            Books Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <Link
                className="nav-item nav-link hovering"
                // style={{ color: "white" }}
                to="#"
              >
                HOME
              </Link>
              <Link
                className="nav-item  nav-link hovering"
                // style={{ color: "white" }}
                to="#"
              >
                BOOKS
              </Link>
              <Link
                className="nav-item  nav-link hovering"
                // style={{ color: "white" }}
                to="#"
              >
                Add Books
              </Link>
              <Link
                className="nav-item  nav-link hovering"
                // style={{ color: "white" }}
                to="#"
              >
                GetAll Users
              </Link>
              <Link
                className="nav-item  nav-link hovering"
                // style={{ color: "white" }}
                t0="#"
              >
                Requests
              </Link>
              <Link
                className="nav-item  nav-link hovering"
                // style={{ color: "white" }}
                to="#"
              >
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-underline"></div>
    </div>
  );
};

export default Navbar;
