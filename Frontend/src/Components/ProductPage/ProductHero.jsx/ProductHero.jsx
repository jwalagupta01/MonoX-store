import React, { useContext } from "react";
import "./ProductHero.css";
import { ShopContext } from "../../../Context/ShopContextProvider";

const ProductHero = ({ productData, mainImage }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="my-4 ms-3 px-2 py-2 bg-light rounded border">
      <div className="product_hero_div d-flex align-items-center">
        <div className="product_img_list ps-2">
          {productData.image.map((item, index) => (
            <div key={index} className="side_img_list d-flex flex-column mt-2">
              <img src={item} alt="" className="rounded border border-secondary" />
            </div>
          ))}
        </div>
        <div className="product_main_img d-flex align-items-center justify-content-center">
          <img src={mainImage} className="rounded border border-dark mx-3" alt="" />
        </div>
        <div className="product_details px-4 py-2">
          <h4 className="product_name fw-semibold">{productData.name}</h4>
          <div className="product_rateing d-flex">⭐⭐⭐⭐⭐<p>(200)</p></div>
          <h3>
            {currency}
            {productData.price}
          </h3>
          <p>{productData.description}</p>
          <div className="size_div">
            <p>Select Size</p>
            <div className="d-flex">
              {productData.sizes.map((item, index) => (
                <p className="px-3 py-2 border" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <button type="button" className="btn btn-outline-dark py-2 px-3">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
