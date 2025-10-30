import React, { useContext, useEffect, useState } from "react";
import "./CollectionPage.css";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { ShopContext } from "../../Context/ShopContextProvider";
import ProductItems from "../Product/ProductItems";

const CollectionPage = () => {
  const { products } = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy.sort(() => Math.random() - 0.5));
  };

  const sortProduct = () => {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="collection_page_div my-5">
      <div className="collection_page d-flex justify-content-center">
        <div className="left_collection">
          <h3 className="fw-bolder text-dark">FILTER</h3>
          <div className="border rounded px-3 py-2">
            <p className="fw-semibold text-secondary">CATEGORIES</p>
            <p>
              <input
                type="checkbox"
                className="mx-3"
                onChange={toggleCategory}
                value={"Men"}
              />
              Mens
            </p>
            <p>
              <input
                type="checkbox"
                className="mx-3"
                onChange={toggleCategory}
                value={"women"}
              />
              Women
            </p>
            <p>
              <input
                type="checkbox"
                className="mx-3"
                onChange={toggleCategory}
                value={"Kids"}
              />
              Kids
            </p>
          </div>
          <div className="border rounded mt-3 px-3 py-2">
            <p className="fw-semibold text-secondary">TYPE</p>
            <p>
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="mx-3"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p>
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="mx-3"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p>
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="mx-3"
                value={"Winterwear"}
              />
              Winterwear
            </p>
          </div>
        </div>
        <div className="right_collection ps-4">
          <div className="collection_header d-flex justify-content-between">
            <CollectionTitle txt1={"ALL"} txt2={"COLLECTIONS"} />
            <div>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="px-2 py-2 border border-dark rounded border-2"
              >
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low To High</option>
                <option value="high-low">Sort by: High To Low</option>
              </select>
            </div>
          </div>
          {/* show product */}
          <div className="product_div d-grid">
            {filterProduct.map((items, index) => (
              <ProductItems
                key={index}
                id={items._id}
                image={items.image[0]}
                name={items.name}
                price={items.price}
              />
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
