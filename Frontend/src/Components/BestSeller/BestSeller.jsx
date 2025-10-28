import React, { useContext, useEffect, useState } from "react";
import "./BestSeller.css";
import CollectionTitle from "../CollectionTitle/CollectionTitle.jsx";
import { ShopContext } from "../../Context/ShopContextProvider";
import ProductItems from "../Product/ProductItems";

const BestSeller = () => {
  const { products, currency } = useContext(ShopContext);
  const [bestSellerProduct, setBestSellerProduct] = useState([]);

  useEffect(() => {
    setBestSellerProduct(products.sort(() => Math.random() - 0.5).slice(0, 10));
  }, []);

  return (
    <div className="best_seller d-flex flex-column align-items-center mt-5">
      <CollectionTitle
        txt1={"BEST"}
        txt2={"SELLER"}
        txt3={
          "Discover our best sellers — timeless designs, unmatched quality, and style that defines every moment."
        }
      />
      <div className="product_div mt-3">
        {bestSellerProduct.map((items, index) => (
          <ProductItems
            key={index}
            id={items._id}
            image={items.image[0]}
            name={items.name}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
