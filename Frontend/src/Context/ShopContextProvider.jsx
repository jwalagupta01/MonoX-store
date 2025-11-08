import React from "react";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  let currency = "₹";
  let deliveryfee = 20;
  const BackendURL = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, SetShowSearch] = useState(false);
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

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

  // delete and update cart data

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  // total amout count

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let productInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) {
            totalAmount += productInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      }
    }
    return totalAmount;
  };

  // const fetch product from backend
  const fetchData = async () => {
    try {
      const response = await axios.get(BackendURL + "/v1/product/product_list");

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

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
    setCartItems,
    getCartCount,
    cartItems,
    updateQuantity,
    getCartAmount,
    BackendURL,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
