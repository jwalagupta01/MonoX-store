import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";
import ProductHero from "./ProductHero.jsx/ProductHero";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { FaAngleDoubleRight } from "react-icons/fa";
import ProductDescription from "./ProductDescription/ProductDescription";
import RelatedProduct from "./RelatedProduct/RelatedProduct";

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
        <ProductHero
          productData={productData}
          mainImage={mainImage}
          setMainImage={setMainImage}
        />
      </div>
      <div className="my-5">
        <CollectionTitle txt1={"FEATURES"} txt2={""} />
        <div className="border rounded px-3 py-4 ">
          <p className="fw-semibold">
            <FaAngleDoubleRight className="me-3" />
            Easy return and exchange policy within 7 days.
          </p>
          <p className="fw-semibold">
            <FaAngleDoubleRight className="me-3" />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div className="my-5">
        <CollectionTitle txt1={"TERMS &"} txt2={"CONDITION"} />
        <div className="border rounded px-3 py-4 ">
          <p className="fw-semibold">
            <FaAngleDoubleRight className="me-3" />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <div>
        <ProductDescription />
      </div>
      <div>
        <RelatedProduct productData={productData} />
      </div>
    </div>
  ) : (
    <div className="m-5 w-100">
      <h1>Product is not show</h1>
    </div>
  );
};

export default ProductPage;
