import React, { useContext, useState } from "react";
import "./PlaceOrderPage.css";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import CarTotal from "../CarTotal/CarTotal";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrderPage = () => {
  const { getCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod");

  // if cart is empty
  const cartEmpty = () => {
    if (getCartAmount() === 0) {
      navigate("/collection");
      toast.info("Your Cart Is Empty");
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="place_order_main my-5 pb-5">
      <div className="place_order_main d-flex justify-content-between">
        <div className="get_details_div border-end pe-3">
          <div>
            <CollectionTitle txt1={"DELIVERY"} txt2={"INFORMATION"} />
          </div>
          <form action="" className="">
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="First Name"
              className="w-50"
            />
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Second Name"
              className="w-50 "
            />
            <input
              type="email"
              name=""
              id=""
              required
              placeholder="Enter Email"
              className="w-100"
            />
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Street"
              className="w-100"
            />
            <input
              type="text"
              name=""
              required
              id=""
              placeholder="City"
              className="w-50"
            />
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="State"
              className="w-50"
            />
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Country"
              className="w-50"
            />
            <input
              type="number"
              name=""
              id=""
              required
              placeholder="Pin Code"
              className="w-50"
            />
            <input
              type="number"
              name=""
              id=""
              required
              placeholder="Enter Phone Number"
              className="w-100"
            />
          </form>
        </div>
        <div className="payment_amount_details ms-3">
          <div>
            <CarTotal className="cart_amount_details" />
          </div>
          <div className="mt-2">
            <div>
              <CollectionTitle txt1={"PAYMENT"} txt2={"METHOD"} />
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ gap: "15px" }}
            >
              <div
                onClick={() => setMethod("strip")}
                className="check_box_div border rounded d-flex px-3"
              >
                <p
                  className={`check_box rounded-circle border border-dark ${
                    method === "strip" ? "bg-info" : ""
                  }`}
                ></p>
                <img src={assets.stripe_logo} className="ms-3" alt="" />
              </div>
              <div
                onClick={() => setMethod("razor")}
                className="check_box_div border rounded d-flex px-3"
              >
                <p
                  className={`check_box rounded-circle border border-dark ${
                    method === "razor" ? "bg-info" : ""
                  }`}
                ></p>
                <img src={assets.razorpay_logo} className="ms-3" alt="" />
              </div>
              <div
                onClick={() => setMethod("cod")}
                className="cod_div border rounded d-flex px-3 "
              >
                <p
                  className={`cod_text_1 check_box rounded-circle border border-dark ${
                    method === "cod" ? "bg-info" : ""
                  }`}
                ></p>
                <p className="cod_text_2 ms-2 fw-bold text-secondary">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
            <div className="mt-3 ms-2">
              <button
                type="button"
                onClick={() => cartEmpty()}
                className="btn btn-outline-dark fw-bold"
              >
                {getCartAmount() === 0 ? "BUY SOMETHINGS" : "PLACE ORDER"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
