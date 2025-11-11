import React from "react";
import "./OrderPage.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { backendURL } from "../../App";
import { toast } from "react-toastify";

const Orderspage = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    const response = await axios.post(
      backendURL + "/api/Order/admin/allOrder",
      {},
      { headers: { token } }
    );

    if (response.data.success) {
      let allUserOrder = [];
      response.data.orderList.map((order) => {
        order.items.map((item) => {
          item["_id"] = order._id;
          item["status"] = order.status;
          item["payment"] = order.payment;
          item["paymentMethod"] = order.paymentMethod;
          item["date"] = order.date;
          item["amount"] = order.amount;
          item["address"] = order.address;
          item["userId"] = order.userId;

          allUserOrder.push(item);
        });
      });
      console.log(response.data);
      console.log(allUserOrder);
      setOrders(allUserOrder);
    } else {
      toast.error(response.data.message);
    }
  };

  const updateStatus = async (orderId, event) => {
    try {
      const response = await axios.post(
        backendURL + "/api/Order/admin/updateStatus",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Status Update");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="order_div ms-2">
      <div>
        {orders.map((item, index) => (
          <div
            key={index}
            className="border px-3 rounded mt-2 d-flex align-items-center"
          >
            <div className="img_div">
              <img src={item.image[0]} alt="" className="rounded pe-2 py-2" />
            </div>
            <div className="user_details d-flex flex-column justify-content-center">
              <p className="item_name">{item.name}</p>
              <p className="user_name fw-semibold">
                {item.address.firstName + " " + item.address.lastName}
              </p>
              <div>
                <p className="adr_street text-secondary">
                  {item.address.street}
                </p>
                <p className="adr_city text-secondary">
                  {item.address.city} {item.address.state}
                </p>
                <p className="adr_coun text-secondary">
                  {item.address.country} {item.address.pinCode}
                </p>
                <p className="adr_phno text-dark">
                  +91 {item.address.PhoneNumber}
                </p>
              </div>
            </div>
            <div className="items_details">
              <div className="d-flex justify-content-center flex-column">
                <p className="item_size">Size: {item.size}</p>
                <p className="item_quant">Items: {item.quantity}</p>
                <p className="item_method">Method: {item.paymentMethod}</p>
                <p className="item_paym">
                  Payment: {item.payment ? "Done" : "Pending"}
                </p>
                <p className="item_date">
                  Date:{" "}
                  <span className="text-secondary">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
            <div className="order_details">
              <div>
                <select
                  onChange={(event) => updateStatus(item._id, event)}
                  value={item.status}
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orderspage;
