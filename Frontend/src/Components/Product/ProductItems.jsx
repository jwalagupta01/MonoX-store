import React, { useContext } from "react";
import "./ProductItems.css";
import { ShopContext } from "../../Context/ShopContextProvider";
import { Link } from "react-router-dom";

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className="product_items overflow-hidden bg-light rounded mt-2 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-center">
          <img src={image} alt="" className="rounded" />
        </div>
        <p className="ps-3 pt-2 fs-6">{name}</p>
        <p className="ps-3">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;
