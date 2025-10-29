import React from "react";
import "./Footer.css";
import {assets} from "../../assets/frontend_assets/assets"
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_div d-flex align-items-center flex-column">
      <div className="footer d-grid">
        <div className="footer_row1 d-flex flex-column">
            <img src={assets.logo} alt="" />
            <p>A shopping website offers products online, allowing customers to browse, compare, and purchase items conveniently with secure payment and fast delivery.</p>
        </div>
        <div className="footer_row2 ms-5 ps-5">
            <h5 className="fw-semibold">COMPANY</h5>
            <ul className="d-flex flex-column">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink>Delivery</NavLink>
                <NavLink>Privacy Policy</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
        <div className="footer_row3">
            <h5 className="fw-semibold">GET IN TOUCH</h5>
            <ul className="d-flex flex-column">
                <NavLink>+91 0000000000</NavLink>
                <NavLink>admin@gmail.com</NavLink>
                <NavLink to="https://www.instagram.com/_ishan___t/">Instagram</NavLink>
            </ul>
        </div>
      </div>
      <div className="footer_copyright w-100 justify-content-between d-flex align-items-center border-top">
        <p className="fw-semibold ms-4 mt-2">
          This Website is created by jwala
        </p>
        <div className="fs-3 me-4 footer_icon_div">
          <Link className="ms-2" to="https://github.com/jwalagupta01" target="_blank">
            <FaGithub />
          </Link>
          <Link className="ms-4" target="_blank" to="https://www.linkedin.com/in/jwala-kumar-40570b30b/">
            <FaLinkedin />
          </Link>
          <Link to="https://www.instagram.com/_ishan___t/" target="_blank" className="ms-4">
            <FaInstagram />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100089031792529" target="_blank" className="ms-4">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
