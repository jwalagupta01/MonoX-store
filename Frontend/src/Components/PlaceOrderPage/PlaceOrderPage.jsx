import React, { useContext, useState } from "react";
import "./PlaceOrderPage.css";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import CarTotal from "../CarTotal/CarTotal";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrderPage = () => {
  const {
    getCartAmount,
    deliveryfee,
    setCartItems,
    cartItems,
    token,
    BackendURL,
    products,
  } = useContext(ShopContext);
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const formData = {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    country,
    pinCode,
    PhoneNumber,
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // if cart is empty
    if (getCartAmount() === 0) {
      navigate("/collection");
      toast.info("your Cart is empty");
    }

    try {
      let orderItem = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItem.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        items: orderItem,
        amount: getCartAmount() + deliveryfee,
        address: formData,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            BackendURL + "/Order/user/COD",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/order");
            toast.success("Your Order Placed");
          } else {
            toast.error(response.data.message);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.message);
    }
  };

  // stripe pay

  const stripePay = async () => {
    setMethod("cod");
    toast.info("StripePay is Disbled");
  };
  // razor Pay
  const razorPay = async () => {
    setMethod("cod");
    toast.info("Razor Pay is Disbled");
  };

  return (
    <div className="place_order_main my-5 pb-5">
      <div className="place_order_main d-flex justify-content-between">
        <form onSubmit={onSubmitHandler} action="" className="">
          <div className="get_details_div border-bottom pb-5">
            <div>
              <CollectionTitle txt1={"DELIVERY"} txt2={"INFORMATION"} />
            </div>
            <input
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First Name"
              className="w-50"
            />
            <input
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last Name"
              className="w-50"
            />
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email"
              className="w-100"
            />
            <input
              type="text"
              required
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              placeholder="Street"
              className="w-100"
            />
            <input
              type="text"
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              className="w-50"
            />
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
              required
              placeholder="State"
              className="w-50"
            />
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              required
              placeholder="Country"
              className="w-50"
            />
            <input
              type="number"
              onChange={(e) => setPinCode(e.target.value)}
              value={pinCode}
              required
              placeholder="Pin Code"
              className="w-50"
            />
            <input
              type="number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={PhoneNumber}
              required
              placeholder="Enter Phone Number"
              className="w-100"
              minLength={1000000000}
              maxLength={9999999999}
            />
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
                  // onClick={() => setMethod("strip")}
                  onClick={stripePay}
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
                  // onClick={() => setMethod("razor")}
                  onClick={razorPay}
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
              <div className="d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-outline-dark fw-bold">
                  {getCartAmount() === 0 ? "BUY SOMETHINGS" : "PLACE ORDER"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
