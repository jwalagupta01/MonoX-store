import React from "react";

const CollectionTitle = ({ txt1, txt2, txt3 }) => {
  return (
    <div className="d-flex align-items-center flex-column mt-4">
      <div className="d-flex">
        <h1 className="text-dark">
          <span className="text-secondary">{txt1}</span> {txt2}
        </h1>
        <div className="latest_name_line d-block bg-dark mt-4 ms-2" style={{height: "5px", width:"60px"}}></div>
      </div>
      <p>
        {txt3}
      </p>
    </div>
  );
};

export default CollectionTitle;
