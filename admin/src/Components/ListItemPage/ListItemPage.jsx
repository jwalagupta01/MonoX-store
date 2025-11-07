import React, { useEffect, useState } from "react";
import "./ListItemPage.css";
import { assets } from "../../assets/assets";
import { FaRupeeSign } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { backendURL } from "../../App";
import { toast } from "react-toastify";
import axios from "axios";

const ListItemPage = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(
        backendURL + "/api/v1/product/product_list"
      );
      if (response.data.success) {
        // toast.success("Data fatched Successfully");
        setList(response.data.products);
      } else {
        toast.error("Data Not Fatched");
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.message);
    }
  };

  const productRemovedHandler = async (id) => {
    try {
      const response = await axios.post(
        backendURL + "/api/v1/product/remove_product",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product Deleted Successfully");
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p className="fw-semibold text-dark">ALL PRODUCT LIST</p>
      <div className="product_list_head border rounded bg-body-secondary fw-semibold d-flex justify-content-between px-2 align-items-center">
        <div style={{ width: "5%" }}>
          <p className="my-1">Image</p>
        </div>
        <div style={{ width: "35%" }}>
          <p className="my-1">Name</p>
        </div>
        <div style={{ width: "10%" }}>
          <p className="my-1">Category</p>
        </div>
        <div style={{ width: "10%" }}>
          <p className="my-1">Price</p>
        </div>
        <div>
          <p className="my-1">Action</p>
        </div>
      </div>
      <div className="product_list_div mt-2">
        {list.map((item, index) => (
          <div
            className="product_list_box border bg-light d-flex justify-content-between px-2 align-items-center"
            key={index}
          >
            <div style={{ width: "5%" }}>
              <img src={item.image[0]} alt="" />
            </div>
            <div style={{ width: "35%" }}>
              <p className="my-1">{item.name}</p>
            </div>
            <div style={{ width: "10%" }}>
              <p className="my-1">{item.category}</p>
            </div>
            <div
              style={{ width: "10%" }}
              className="d-flex justify-content-start"
            >
              <p className="my-1">
                <FaRupeeSign />
                {item.price}
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                onClick={() => productRemovedHandler(item._id)}
                className="btn btn-outline-danger px-4 rounded-pill"
              >
                <FaXmark />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItemPage;
