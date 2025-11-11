import React from "react";
import Orderspage from "../Components/Orders/Orderspage";

const Orders = ({token}) => {
  return (
    <div>
      <div>
        <Orderspage token={token} />
      </div>
    </div>
  );
};

export default Orders;
