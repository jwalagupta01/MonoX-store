import React, { useState } from "react";
import "./AddItemPage.css";
import { assets } from "../../assets/assets";
import { backendURL } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";

const AdditemPage = ({ token }) => {
  // set image in useState
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);

  // set data in use state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState();
  const [sizes, setSize] = useState([]);

  const addProductHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      image5 && formData.append("image5", image5);
      image6 && formData.append("image6", image6);

      setImage1(false);
      setImage2(false);
      setImage3(false);
      setImage4(false);
      setImage5(false);
      setImage6(false);
      setName("");
      setDescription("");
      setPrice("");

      const response = await axios.post(
        backendURL + "/api/v1/product/add_Product",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product Added Successfully");
      } else {
        toast.error("Product Added Failed");
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="px-4 py-2">
      <div>
        <form action="" onSubmit={addProductHandler}>
          <div className="upload_image">
            <p className="fw-semibold">Upload Image</p>
            <div className="upl_img d-flex">
              <label htmlFor="image1" className="position-relative">
                <img
                  src={
                    !image1 ? assets.upload_area : URL.createObjectURL(image1)
                  }
                  alt=""
                />
                <input
                  onChange={(e) => setImage1(e.target.files[0])}
                  type="file"
                  id="image1"
                  required
                  hidden
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark fs-4">
                  *
                </span>
              </label>
              <label htmlFor="image2">
                <img
                  src={
                    !image2 ? assets.upload_area : URL.createObjectURL(image2)
                  }
                  alt=""
                />
                <input
                  type="file"
                  onChange={(e) => setImage2(e.target.files[0])}
                  id="image2"
                  hidden
                />
              </label>
              <label htmlFor="image3">
                <img
                  src={
                    !image3 ? assets.upload_area : URL.createObjectURL(image3)
                  }
                  alt=""
                />
                <input
                  type="file"
                  onChange={(e) => setImage3(e.target.files[0])}
                  id="image3"
                  hidden
                />
              </label>
              <label htmlFor="image4">
                <img
                  src={
                    !image4 ? assets.upload_area : URL.createObjectURL(image4)
                  }
                  alt=""
                />
                <input
                  type="file"
                  onChange={(e) => setImage4(e.target.files[0])}
                  id="image4"
                  hidden
                />
              </label>
              <label htmlFor="image5">
                <img
                  src={
                    !image5 ? assets.upload_area : URL.createObjectURL(image5)
                  }
                  alt=""
                />
                <input
                  type="file"
                  onChange={(e) => setImage5(e.target.files[0])}
                  id="image5"
                  hidden
                />
              </label>
              <label htmlFor="image6">
                <img
                  src={
                    !image6 ? assets.upload_area : URL.createObjectURL(image6)
                  }
                  alt=""
                />
                <input
                  type="file"
                  onChange={(e) => setImage6(e.target.files[0])}
                  id="image6"
                  hidden
                />
              </label>
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="rounded border px-3"
                placeholder="Type here"
                style={{ width: "100%", height: "40px" }}
              />
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="desc">Product description</label>
              <textarea
                type="text"
                className="border rounded px-3"
                id="desc"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Write content here"
                style={{ width: "100%", height: "70px" }}
              />
            </div>
            <div
              className="mt-3 d-flex justify-content-between"
              style={{ gap: "10px" }}
            >
              <div className="prod_category d-flex flex-column">
                <label htmlFor="">Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded border px-2 py-2"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
              <div className="prod_sub_category d-flex flex-column">
                <label htmlFor="">Sub-Category</label>
                <select
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="rounded border px-2 py-2"
                >
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>
              <div className="prod_Price d-flex flex-column">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="25"
                  className="border rounded px-3"
                  style={{ height: "40px" }}
                />
              </div>
            </div>
            <div className="size_div mt-3">
              <label htmlFor="">Product Size</label>
              <div className="sixe_box d-flex">
                <div
                  className={`${
                    sizes.includes("S")
                      ? "bg-secondary text-light"
                      : "bg-body-secondary"
                  }`}
                  onClick={() =>
                    setSize((prev) =>
                      prev.includes("S")
                        ? prev.filter((item) => item !== "S")
                        : [...prev, "S"]
                    )
                  }
                >
                  <p className="px-2 fs-5 pt-3">S</p>
                </div>
                <div
                  className={`${
                    sizes.includes("M")
                      ? "bg-secondary text-light"
                      : "bg-body-secondary"
                  }`}
                  onClick={() =>
                    setSize((prev) =>
                      prev.includes("M")
                        ? prev.filter((item) => item !== "M")
                        : [...prev, "M"]
                    )
                  }
                >
                  <p className="px-2 fs-5 pt-3">M</p>
                </div>
                <div
                  className={`${
                    sizes.includes("L")
                      ? "bg-secondary text-light"
                      : "bg-body-secondary"
                  }`}
                  onClick={() =>
                    setSize((prev) =>
                      prev.includes("L")
                        ? prev.filter((item) => item !== "L")
                        : [...prev, "L"]
                    )
                  }
                >
                  <p className="px-2 fs-5 pt-3">L</p>
                </div>
                <div
                  className={`${
                    sizes.includes("XL")
                      ? "bg-secondary text-light"
                      : "bg-body-secondary"
                  }`}
                  onClick={() =>
                    setSize((prev) =>
                      prev.includes("XL")
                        ? prev.filter((item) => item !== "XL")
                        : [...prev, "XL"]
                    )
                  }
                >
                  <p className="px-2 fs-5 pt-3">XL</p>
                </div>
                <div
                  className={`${
                    sizes.includes("XXL")
                      ? "bg-secondary text-light"
                      : "bg-body-secondary"
                  }`}
                  onClick={() =>
                    setSize((prev) =>
                      prev.includes("XXL")
                        ? prev.filter((item) => item !== "XXL")
                        : [...prev, "XXL"]
                    )
                  }
                >
                  <p className="px-2 fs-5 pt-3">XXL</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <input
                type="checkbox"
                onChange={() => setBestSeller((prev) => !prev)}
                checked={bestSeller}
                id="bestSeller"
              />
              <label htmlFor="bestSeller" className="ps-2">
                Add To BestSeller
              </label>
            </div>
            <div className="mt-4 d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-outline-dark px-4">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditemPage;
