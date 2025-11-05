import { v2 as cloudinary } from "cloudinary";
import { json } from "express";
import { ProductModel } from "../Model/productModel.js";

// function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const image5 = req.files.image5 && req.files.image5[0];
    const image6 = req.files.image6 && req.files.image6[0];

    const images = [image1, image2, image3, image4, image5, image6].filter(
      (item) => item !== undefined
    );

    const imageURL = await Promise.all(
      images.map(async (item) => {
        let ImgUrlResult = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return ImgUrlResult.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imageURL,
      date: Date.now(),
    };

    console.log(productData);

    const product = new ProductModel(productData);
    await product.save();

    res.json({ success: true, message: "Product uploaded successfully" });
  } catch (error) {
    console.log("error:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// function for list product

const listProduct = async (req, res) => {
  try {
    let products = await ProductModel.find({});
    res.json({
      success: true,
      message: "Product Fetched Successfully",
      products,
    });
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// function for remove product

const removeProduct = async (req, res) => {};

// function for single product info

const productInfo = async (req, res) => {};

export { addProduct, listProduct, removeProduct, productInfo };
