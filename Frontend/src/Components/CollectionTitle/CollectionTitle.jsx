import React from "react";
import "./CollectionTitle.css";

const CollectionTitle = ({ txt1, txt2, txt3 }) => {
  return (
    <div className="collection_title d-flex text-center align-items-center flex-column">
      <div className="d-flex">
        <h3 className="text-dark">
          <span className="text-secondary">{txt1}</span> {txt2}
        </h3>
        <div
          className="latest_name_line bg-dark mt-3 ms-2"
          style={{ height: "5px", width: "60px" }}
        ></div>
      </div>
      <p>{txt3}</p>
    </div>
  );
};

export default CollectionTitle;
