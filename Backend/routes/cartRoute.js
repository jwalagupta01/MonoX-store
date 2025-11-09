import express from "express";
import {
  AddToCart,
  UpdateCart,
  getUserCart,
} from "../Controllers/CartModel.js";
import authUser from "../MiddleWare/auth.middleware.js";

const cartRouter = express.Router();

cartRouter.post("/addcart", authUser, AddToCart);
cartRouter.post("/updatecart", authUser, UpdateCart);
cartRouter.post("/getcart", authUser, getUserCart);

export default cartRouter;
