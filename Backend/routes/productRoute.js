import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  productInfo,
} from "../Controllers/productController.js";
import upload from "../MiddleWare/multer.middleware.js";
import AdminAuth from "../MiddleWare/adminAuth.middleware.js";

const productRoute = express.Router();

productRoute.post(
  "/add_Product",
  AdminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 },
    { name: "image6", maxCount: 1 },
  ]),
  addProduct
);
productRoute.post("/remove_product", AdminAuth, removeProduct);
productRoute.post("/info_product", productInfo);
productRoute.get("/product_list", listProduct);

export default productRoute;
