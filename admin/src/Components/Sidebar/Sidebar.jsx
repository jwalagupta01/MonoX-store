import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa6";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center border-end">
      <NavLink
        to={"/add-items"}
        className="add_item d-flex border w-100 mt-3 ps-3"
      >
        <p>
          <TbSquareRoundedPlusFilled />
        </p>
        <p>Add Items</p>
      </NavLink>
      <NavLink
        to={"/item-list"}
        className="list_product d-flex border w-100 mt-3 ps-3"
      >
        <p>
          <FaClipboardList />
        </p>
        <p>List Items</p>
      </NavLink>
      <NavLink to={"/order"} className="orders d-flex border w-100 mt-3 ps-3">
        <p>
          <LuPackageCheck />
        </p>
        <p>Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
