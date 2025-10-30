import React, { useContext, useEffect, useState } from "react";
import "./relatedProduct.css";
import CollectionTitle from "../../CollectionTitle/CollectionTitle";
import { ShopContext } from "../../../Context/ShopContextProvider";
import ProductItems from "../../Product/ProductItems";

const RelatedProduct = ({ productData }) => {
  const productcategory = productData.category;
  const productSubcategory = productData.subCategory;
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productcopy = products.slice();
      productcopy = productcopy.filter(
        (item) => productcategory === item.category
      );
      productcopy = productcopy.filter(
        (item) => productSubcategory === item.subCategory
      );

      setRelated(productcopy.sort(() => Math.random() - 0.5).slice(0, 5));
    }
  }, [products]);

  return (
    <div className="related_product_div my-5">
      <div>
        <CollectionTitle txt1={"RELETED"} txt2={"PRODUCT"} />
      </div>
      <div className="related_product d-grid">
        {related.map((item, index) => (
          <div key={index}>
            <ProductItems
              image={item.image}
              name={item.name}
              id={item._id}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
