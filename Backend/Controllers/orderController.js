// place Order using COD method

import { OrderModel } from "../Model/OrderModel.js";
import { UserModel } from "../Model/userModel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new OrderModel(orderData);
    await newOrder.save();

    await UserModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      Message: "OrderPlaced Successfully",
    });
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      Message: error.Message,
    });
  }
};

// place order using razorPay Method

const placeOrderRazorPay = async (req, res) => {};

//place order using stripe method

const placeOrderStripe = async (req, res) => {};

// all orders data for admin panal

const allOrder = async (req, res) => {};

// all order data for user in frontend

const userOrder = async (req, res) => {};

// update order Status from admin Panel

const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrder,
  userOrder,
  updateStatus,
};
