import { createContext } from "react";
import React from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  let currency = "₹";
  let deliveryfee = 20;

  const value = {
    products,
    currency,
    deliveryfee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
