import exprees from "express";
import {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrder,
  userOrder,
  updateStatus,
} from "../Controllers/orderController";
import AdminAuth from "../MiddleWare/adminAuth.middleware";
import authUser from "../MiddleWare/auth.middleware";

const placeOrderRouter = exprees.Router();

// admin Features
orderRouter.post("/admin/allOrder", AdminAuth, allOrder);
orderRouter.post("/admin/updateStatus", AdminAuth, updateStatus);

// payment features
orderRouter.post("/user/COD", authUser, placeOrder);
orderRouter.post("/user/razorPay", authUser, placeOrderRazorPay);
orderRouter.post("/user/stripePay", authUser, placeOrderStripe);

// user features
orderRouter.post("/userOrder", authUser, userOrder);

export default placeOrderRouter;
