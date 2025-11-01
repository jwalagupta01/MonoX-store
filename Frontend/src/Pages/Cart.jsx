import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContextProvider";
import CollectionTitle from "../Components/CollectionTitle/CollectionTitle";
import CartProduct from "../Components/cartProduct/cartProduct";
import CarTotal from "../Components/CarTotal/CarTotal";


const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

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
      <div>
        <CarTotal />
      </div>
    </div>
  );
};

export default Cart;
