import React, { useContext } from "react";
import "./OrderPage.css";
import { FaXmark } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContextProvider";
import CollectionTitle from "../../Components/CollectionTitle/CollectionTitle";

const OrderPage = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div>
      <div>
        <CollectionTitle txt1={"YOUR"} txt2={"ORDER"} />
      </div>
      <div>
        {products.slice(0, 4).map((item, index) => (
          <div className="order_list d-flex border-bottom px-3" key={index}>
            <div className="product_img_details d-flex">
              <img src={item.image[0]} alt="" className="rounded" />
              <div className="ms-2">
                <p className="item_name fw-bold text-secondary">{item.name}</p>
                <div className="price_quantity_size d-flex">
                    <p>{currency}{item.price}</p>
                    <p className="ps-3">Quantity: 2</p>
                    <p className="ps-3">Size: {item.sizes[0]}</p>
                </div>
                <p className="order_date fw-semibold">DATE: <span className="text-secondary">11/2/2025</span></p>
              </div>
            </div>
            <div className="order_details d-flex">
              <div className="green_dot rounded-circle mt-2 me-2"></div>
              <p>Ready To Ship</p>
            </div>
            <div className="cancle_Button d-flex justify-content-end">
              <button
                type="button"
                className="order_cancle_btn rounded px-3 py-2 border d-flex fw-semibold text-danger"
              >
                CANCLE
                <FaXmark className=" fs-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
