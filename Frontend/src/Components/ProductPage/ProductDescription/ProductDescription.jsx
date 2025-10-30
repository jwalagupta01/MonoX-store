import React from "react";

const ProductDescription = () => {
  return (
    <div className="mb-5">
      <div className="d-flex">
        <p className="border px-3 py-2 fw-bold">Description</p>
        <p className="border px-3 py-2"> Reviews (122) </p>
      </div>
      <div
        className="description_text_box border px-2 py-2 text-secondary fw-semibold"
        style={{ marginTop: "-17px", fontSize: "13px" }}
      >
        <p className="">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.{" "}
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
