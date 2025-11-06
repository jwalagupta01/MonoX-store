import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaClipboardList, FaPlus } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center border-end">
      <NavLink
        to={"/add-items"}
        className="add_item d-flex border w-100 mt-3 ps-3 text-dark"
      >
        <p>
          <FaPlus />
        </p>
        <p>Add Items</p>
      </NavLink>
      <NavLink
        to={"/item-list"}
        className="list_product d-flex border w-100 mt-3 ps-3 text-dark"
      >
        <p>
          <FaClipboardList />
        </p>
        <p>List Items</p>
      </NavLink>
      <NavLink
        to={"/order"}
        className="orders d-flex border w-100 mt-3 ps-3 text-dark"
      >
        <p>
          <LuPackageCheck />
        </p>
        <p>Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
