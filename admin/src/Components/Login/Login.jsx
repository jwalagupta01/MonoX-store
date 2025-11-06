import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_div d-flex align-items-center justify-content-center">
      <div className="login_box bg-light border rounded d-flex flex-column justify-content-center py-3 px-3">
        <h1 className="fw-semibold mb-5 mt-3 text-center">Admin Login</h1>
        <div className="form_box">
          <form className="d-flex flex-column" action="">
            <input
              className="px-3 border rounded"
              type="email"
              required
              placeholder="Enter Email"
            />
            <input
              className="mt-3 px-3 border rounded"
              type="password"
              required
              placeholder="Enter password"
            />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn mt-4 btn-outline-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
