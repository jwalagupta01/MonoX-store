// place Order using COD method

import mongoose from "mongoose";
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

const allOrder = async (req, res) => {
  try {
    const orderList = await OrderModel.find({});

    res.json({
      success: true,
      message: "all order fetched successfully",
      orderList,
    });
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// all order data for user in frontend

const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await OrderModel.find({ userId });

    res.json({ success: true, Message: "Your Order", orders });
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      Message: error.Message,
    });
  }
};

// update order Status from admin Panel

const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.json({
        success: true,
        message: "Order ID and status are required",
      });
    }

    const updateOrder = await OrderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updateOrder) {
      return res.json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.json({
      success: true,
      message: "status Update",
      order: updateOrder,
    });
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrder,
  userOrder,
  updateStatus,
};
