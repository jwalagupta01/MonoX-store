import React from "react";
import ListItemPage from "../Components/ListItemPage/ListItemPage";

const ListItem = ({ token }) => {
  return (
    <div className="w-100 mx-4 my-3">
      <div>
        <ListItemPage token={token} />
      </div>
    </div>
  );
};

export default ListItem;
