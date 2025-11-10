import React, { useContext } from "react";
import "./OrderPage.css";
import { FaXmark } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContextProvider";
import CollectionTitle from "../../Components/CollectionTitle/CollectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const OrderPage = () => {
  const { products, currency, BackendURL, token } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const fetchedOrderdata = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        BackendURL + "/Order/userOrder",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrderItems = [];

        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;

            allOrderItems.push(item);
          });
        });
        setOrderData(allOrderItems.reverse());
      }

      // console.log(response);
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.Message);
    }
  };

  useEffect(() => {
    fetchedOrderdata();
  }, [token]);

  return (
    <div>
      <div>
        <CollectionTitle txt1={"YOUR"} txt2={"ORDER"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div className="order_list d-flex border-bottom px-3" key={index}>
            <div className="product_img_details d-flex">
              <img src={item.image[0]} alt="" className="rounded" />
              <div className="ms-2">
                <p className="item_name fw-bold text-secondary">{item.name}</p>
                <div className="price_quantity_size d-flex">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p className="ps-3">Quantity: {item.quantity}</p>
                  <p className="ps-3">Size: {item.size}</p>
                </div>
                <p className="order_date fw-semibold">
                  DATE:{" "}
                  <span className="text-secondary">
                    {new Date(item.date).toDateString()}
                  </span>
                  <span className="text-secondary ms-2">
                    Payment:- {item.paymentMethod}
                  </span>
                </p>
              </div>
            </div>
            <div className="order_details d-flex">
              <div className="green_dot rounded-circle mt-2 me-2"></div>
              <p>{item.status}</p>
            </div>
            <div className="cancle_Button d-flex justify-content-end">
              <button
                type="button"
                onClick={fetchedOrderdata}
                className="order_cancle_btn rounded px-3 py-2 border d-flex fw-semibold text-danger"
              >
                TRACK ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
