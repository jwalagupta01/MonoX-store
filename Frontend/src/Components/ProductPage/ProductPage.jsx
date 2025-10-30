import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
import ProductHero from "./ProductHero.jsx/ProductHero";

const ProductPage = () => {
  const { ProductId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [mainImage, setMainImage] = useState("");

  const fetchProductData = async () => {
    products.map((items) => {
      if (items._id === ProductId) {
        setProductData(items);
        setMainImage(items.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [ProductId]);

  return productData ? (
    <div className="Product_main_div">
      <div className="product_hero">
        <ProductHero productData={productData} mainImage={mainImage} />
      </div>
    </div>
  ) : (
    <div className="m-5 w-100">
      <h1>Product is not show</h1>
    </div>
  );
};

export default ProductPage;
