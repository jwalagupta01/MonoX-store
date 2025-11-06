import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between border-bottom px-2 align-items-center">
      <div>
        <img src={logo} className="nav_logo" alt="" />
      </div>
      <div>
        <button type="button" className="btn btn-outline-dark rounded-pill">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
