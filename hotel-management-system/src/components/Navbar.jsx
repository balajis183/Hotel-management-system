import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">X Hotel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav ">
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item" >
                <Link className="nav-link text-white"  to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rooms">Rooms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
