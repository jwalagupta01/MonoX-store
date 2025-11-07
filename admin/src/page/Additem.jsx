import React from "react";
import AdditemPage from "../Components/addItemPage/AddItempage";

const Additem = ({ token }) => {
  return (
    <div>
      <AdditemPage token={token} />
    </div>
  );
};

export default Additem;
