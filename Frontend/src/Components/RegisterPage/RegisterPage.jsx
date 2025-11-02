import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import CollectionTitle from "../CollectionTitle/CollectionTitle";

const RegisterPage = () => {
  return (
    <div className="sign_up_div d-flex align-items-center justify-content-center">
      <div className="sign_up_box d-flex flex-column border rounded p-3 align-items-center justify-content-center">
        <div>
          <CollectionTitle txt1={"Sign"} txt2={"Up"} />
        </div>
        <form action="" className="sing_up_form d-flex flex-column">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-100 rounded px-3 border border-dark"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-100 rounded px-3 mt-3 border border-dark"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-100 rounded px-3 mt-3 border border-dark"
          />
          <div className="d-flex justify-content-end pe-3 mt-3">
            <p className="fw-semibold text-dark">
              Already Account:-{" "}
              <Link to={'/login'} className="text-primary fw-bold">Login</Link>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-outline-dark px-3 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
