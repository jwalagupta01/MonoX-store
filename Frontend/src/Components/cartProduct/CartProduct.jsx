import React, { useContext } from "react";
import "./CartProduct.css";
import { ShopContext } from "../../Context/ShopContextProvider";
import { MdDeleteForever } from "react-icons/md";

const CartProduct = ({ cartData }) => {
  const { products, currency, updateQuantity } = useContext(ShopContext);

  return (
    <div className="">
      {cartData.map((item, index) => {
        const productData = products.find(
          (product) => product._id === item._id
        );

        return (
          <div
            className="d-flex py-2 align-items-center justify-content-between border-bottom border-2 mt-2"
            key={index}
          >
            <div className="product_img_details d-flex">
              <img src={productData.image[0]} className="rounded" alt="" />
              <div className="d-flex flex-column ms-3">
                <p className="product_name fw-semibold text-secondary">
                  {productData.name}
                </p>
                <div className="price_size_div d-flex">
                  <p className="pt-2">
                    {currency}
                    {productData.price}
                  </p>
                  <p className="ms-3 px-3 py-1 border bg-light">{item.size}</p>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="fw-semibold">
                Quantity
              </label>
              <input
                type="number"
                className="quantity"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />
            </div>
            <button
              className="delete_button border-0 bg-transparent fs-3"
              type="button"
              onClick={() => updateQuantity(item._id, item.size, 0)}
            >
              <MdDeleteForever />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartProduct;
