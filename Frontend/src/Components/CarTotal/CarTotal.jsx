import React, { useContext } from "react";
import "./CarTotal.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { ShopContext } from "../../Context/ShopContextProvider";

const CarTotal = () => {
  const { getCartAmount, currency, deliveryfee } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="cartotal_div">
      <div className="cart_total py-3 px-4 d-flex flex-column">
        <div>
          <CollectionTitle txt1={"CART"} txt2={"TOTALS"} />
        </div>
        <div className="cart_total_details mt-4 fw-semibold">
          <div className="d-flex justify-content-between border-bottom">
            <p>Sub Total</p>
            <p>
              {currency}
              {getCartAmount()}.00
            </p>
          </div>
          <div className="d-flex justify-content-between border-bottom">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {deliveryfee}.00
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryfee}.00
            </p>
          </div>
          <div className="d-flex justify-content-center"></div>
        </div>
      </div>
    </div>
  );
};

export default CarTotal;
