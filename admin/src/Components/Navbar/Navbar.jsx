import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({setToken}) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between border-bottom px-2 align-items-center">
      <div>
        <img
          src={logo}
          onClick={() => navigate("/")}
          className="nav_logo"
          alt=""
        />
      </div>
      <div>
        <button type="button" onClick={()=>setToken("")} className="btn btn-outline-dark rounded-pill">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
