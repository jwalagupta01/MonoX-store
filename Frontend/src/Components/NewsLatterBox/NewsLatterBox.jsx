import React from "react";
import "./NewsLatterBox.css";

const NewslatterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="d-flex my-5 py-5 flex-column align-items-center">
      <p className="fs-4 fw-bold">Subscribe Now & get 20% off</p>
      <p className="text-secondary">
        Subscribe today and enjoy an exclusive 20% discount on every product,
        every time you shop.
      </p>
      <div className="form_div mt-3">
        <form action="" onSubmit={onSubmitHandler} className="form">
          <input
            type="text"
            className="border ps-3"
            required
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="border-0 outline-0 px-4 py-2 bg-dark text-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewslatterBox;
