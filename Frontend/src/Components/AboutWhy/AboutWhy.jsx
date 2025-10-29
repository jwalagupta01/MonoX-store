import React from "react";
import "./AboutWhy.css";

const AboutWhy = ({ icon, tittle }) => {
  return (
    <div>
      <h1>{icon}</h1>
      <p>{tittle}</p>
    </div>
  );
};

export default AboutWhy;
