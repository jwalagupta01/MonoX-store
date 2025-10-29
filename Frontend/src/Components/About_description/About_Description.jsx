import React from "react";
import "./About_Description.css";
import { FaFeatherPointed } from "react-icons/fa6";


const About_description = ({ txt1, txt2, image1, image2 }) => {
  return (
    <div className="about_description my-4">
      <div className="description_div d-flex flex-column">
        <div className="top_desc bg-secondary text-light border-bottom border-2 rounded d-flex align-items-center justify-content-between">
          <img src={image1} className="rounded" alt="" />
          <p className="fw-semibold"><FaFeatherPointed />{txt1}</p>
        </div>
        <div className="bottom_desc bg-light text-secondary border-bottom border-2 rounded mt-5 d-flex align-items-center justify-content-between">
          <p className="fw-semibold"><FaFeatherPointed />{txt2}</p>
          <img src={image2} className="rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About_description;
