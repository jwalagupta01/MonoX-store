import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import CollectionTitle from "../CollectionTitle/CollectionTitle";

const LoginPage = () => {
  return (
    <div className="login_div">
      <div className="border rounded p-3">
        <CollectionTitle txt2={"Login"} />
        <form
          action=""
          className="login_form d-flex flex-column justify-content-center align-items-center"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="px-3 rounded border border-dark"
          />
          <input
            type="password"
            placeholder="Enter Your Email"
            required
            className="px-3 mt-3 rounded border border-dark"
          />
          <div className="link_div mt-3 d-flex justify-content-between align-items-center">
            <Link>
              <p className="fw-bold text-dark ps-3">Forgot Your Password..?</p>
            </Link>
            <Link to={"/register"}>
              <p className="fw-bold text-primary pe-3">Create Account...</p>
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-outline-dark mt-4 px-3 py-1"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
