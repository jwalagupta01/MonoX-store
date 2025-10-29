import React from "react";
import "./AboutWhy.css";

const AboutWhy = ({ icon, tittle }) => {
  return (
    <div className="about_why py-5 px-3 d-flex align-items-center justify-content-center flex-column rounded border">
      <h1>{icon}</h1>
      <p className="fw-semibold mt-3">{tittle}</p>
    </div>
  );
};

export default AboutWhy;
