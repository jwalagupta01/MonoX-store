import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContextProvider";
import CollectionTitle from "../Components/CollectionTitle/CollectionTitle";
import CartProduct from "../Components/cartProduct/cartProduct";
import CarTotal from "../Components/CarTotal/CarTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getCartAmount } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  // if total cart value is 0 so

  const cartValue = (e) => {
    if (getCartAmount() === 0) {
      navigate("/collection");
      toast.error("Your Cart Is Empty");
    } else {
      navigate("/placeorder");
    }
  };

  useEffect(() => {
    let tempdata = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempdata);
  }, [cartItems]);

  return (
    <div className="cart_div border-top mt-2 py-4 mb-5">
      <div>
        <CollectionTitle txt1={"Your"} txt2={"cart"} />
      </div>
      <div className="product_list_div py-2 border-top border-bottom rounded">
        <CartProduct cartData={cartData} />
      </div>
      <div className="cart_amount" style={{ width: "50%" }}>
        <CarTotal />
        <div>
          <button
            type="button"
            onClick={() => cartValue()}
            className="cart_amount_btn btn mb-5 btn-outline-dark fw-semibold px-3 py-2 rounded"
          >
            {getCartAmount() === 0 ? "Buy Somethings" : "PROCEED TO CHECKOUT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
