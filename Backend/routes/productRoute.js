import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  productInfo,
} from "../Controllers/productController";

const productRoute = express.Router();

productRoute.post("/add_Product", addProduct);
productRoute.post("/remove_product", removeProduct);
productRoute.post("/info_product", productInfo);
productRoute.get("/product_list", listProduct);

export default productRoute;
