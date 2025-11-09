import exprees from "express";
import {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrder,
} from "../Controllers/orderController";
import AdminAuth from "../MiddleWare/adminAuth.middleware";
import authUser from "../MiddleWare/auth.middleware";

const placeOrderRouter = exprees.Router();

orderRouter.get("/allOrder", AdminAuth, allOrder);
orderRouter.post("/COD", authUser, placeOrder);
orderRouter.post("/razorPay", authUser, placeOrderRazorPay);
orderRouter.post("/stripePay", authUser, placeOrderStripe);

export default placeOrderRouter;
