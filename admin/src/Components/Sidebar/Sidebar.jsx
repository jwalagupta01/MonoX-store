import React from "react";
import "./Sidebar.css";
import { FaClipboardList } from "react-icons/fa6";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center border-end">
      <div className="add_item d-flex border w-100 mt-3 ps-3">
        <p>
          <TbSquareRoundedPlusFilled />
        </p>
        <p>Add Items</p>
      </div>
      <div className="list_product d-flex border w-100 mt-3 ps-3">
        <p>
          <FaClipboardList />
        </p>
        <p>List Items</p>
      </div>
      <div className="orders d-flex border w-100 mt-3 ps-3">
        <p>
          <LuPackageCheck />
        </p>
        <p>Orders</p>
      </div>
    </div>
  );
};

export default Sidebar;
