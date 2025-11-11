import exprees from "express";
import {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrder,
  userOrder,
  updateStatus,
} from "../Controllers/orderController.js";
import AdminAuth from "../MiddleWare/adminAuth.middleware.js";
import authUser from "../MiddleWare/auth.middleware.js";

const placeOrderRouter = exprees.Router();

// admin Features
placeOrderRouter.post("/admin/allOrder", AdminAuth, allOrder);
placeOrderRouter.post("/admin/updateStatus", AdminAuth, updateStatus);

// payment features
placeOrderRouter.post("/user/COD", authUser, placeOrder);
placeOrderRouter.post("/user/razorPay", authUser, placeOrderRazorPay);
placeOrderRouter.post("/user/stripePay", authUser, placeOrderStripe);

// user features
placeOrderRouter.post("/userOrder", authUser, userOrder);

export default placeOrderRouter;
