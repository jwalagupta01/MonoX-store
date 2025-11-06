import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between border">
      <div>
        <img src="" alt="" />
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
