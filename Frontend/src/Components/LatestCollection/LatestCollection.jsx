import React, { useContext, useEffect, useState } from "react";
import "./LatestCollection.css";
import { ShopContext } from "../../Context/ShopContextProvider";
import CollectionTitle from "../CollectionTitle";
import ProductItems from "../Product/ProductItems";

const LatestCollection = () => {
  const { products, currency } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.sort(() => Math.random() - 0.5).slice(0, 10));
  }, []);

  console.log(products);
  return (
    <div className="latest_product_div d-flex flex-column align-items-center mt-5">
      <CollectionTitle
        txt1={"LATEST"}
        txt2={"COLLECTION"}
        txt3={
          "Discover our latest collection — bold, modern, and timeless pieces crafted to elevate your everyday style."
        }
      ></CollectionTitle>
      <div className="product_div">
        {latestProduct.map((items, index) => (
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

export default LatestCollection;
