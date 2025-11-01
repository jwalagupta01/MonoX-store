import { createContext, useEffect, useState } from "react";
import React from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  let currency = "₹";
  let deliveryfee = 20;
  const [search, setSearch] = useState("");
  const [showSearch, SetShowSearch] = useState(false);
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    //  add to cart function-------------------

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  // get cart count for navbar cart count

  const getCartCount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {
          console.log("error :", error);
        }
      }
    }
    return totalcount;
  };

  const value = {
    products,
    currency,
    deliveryfee,
    search,
    setSearch,
    showSearch,
    SetShowSearch,
    size,
    setSize,
    addToCart,
    getCartCount,
    cartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
