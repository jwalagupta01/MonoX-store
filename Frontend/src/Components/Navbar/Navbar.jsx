import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { TiThListOutline } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { assets } from "../../assets/frontend_assets/assets.js";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider.jsx";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const { showSearch, SetShowSearch } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchOnHandler = () => {
    if (location.pathname.includes("collection")) {
      SetShowSearch(!showSearch);
    } else if (!location.pathname.includes("collection")) {
      navigate("/collection");
      SetShowSearch(true);
    }
  };
  return (
    <nav>
      <div className="navbar d-flex justify-content-between align-items-center ">
        <Link to={"/"}>
          <img src={assets.logo} className="brand_logo" alt="" />
        </Link>
        <div className="nav_ul_div">
          <ul className="nav_ul d-flex list-unstyled">
            <NavLink to={"/"}>
              <p className="nav_p">HOME</p>
            </NavLink>
            <NavLink to={"/collection"}>
              <p className="nav_p">COLLECTION</p>
            </NavLink>
            <NavLink to={"/about"}>
              <p className="nav_p">ABOUT</p>
            </NavLink>
            <NavLink to={"/contact"}>
              <p className="nav_p">CONTACT</p>
            </NavLink>
          </ul>
        </div>
        <div className="nav_right_div d-flex">
          <span onClick={searchOnHandler}>
            <IoMdSearch />
          </span>
          <span className="user_icon position-relative">
            <FaRegUser />
            <div className="user_hover_div d-none">
              <div className="hover_box border rounded d-flex flex-column fs-5 position-absolute">
                <div className="hovor_1">My Profile</div>
                <div className="hovor_2">My Orders</div>
                <div className="hovor_3">Logout</div>
              </div>
            </div>
          </span>
          <span className="position-relative">
            <Link to={"/cart"}>
              <IoBagHandleSharp />
              <p className="position-absolute top-100 start-100 translate-middle badge rounded-pill">
                0
              </p>
            </Link>
          </span>
          <span className="three_dot_menu" onClick={() => setNavVisible(true)}>
            <TiThListOutline />
          </span>
        </div>
      </div>
      <div
        className={`drop_menu bg-light position-absolute top-0 start-0 bottom-0 overflow-hidden w-100 h-100 ${
          navVisible ? "d-block" : "d-none"
        }`}
      >
        <div className="d-flex flex-column">
          <div
            onClick={() => setNavVisible(false)}
            className="nav_back_button my-3 mx-3"
          >
            <span>
              <IoIosArrowBack /> Back
            </span>
          </div>
          <NavLink
            className="py-2 ps-4 border"
            onClick={() => setNavVisible(false)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 ps-4 border"
            onClick={() => setNavVisible(false)}
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="py-2 ps-4 border"
            onClick={() => setNavVisible(false)}
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className="py-2 ps-4 border"
            onClick={() => setNavVisible(false)}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
