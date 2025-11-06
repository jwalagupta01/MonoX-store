import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { backendURL } from "../../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendURL + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="login_div d-flex align-items-center justify-content-center">
      <div className="login_box bg-light border rounded d-flex flex-column justify-content-center py-3 px-3">
        <h1 className="fw-semibold mb-5 mt-3 text-center">Admin Login</h1>
        <div className="form_box">
          <form
            className="d-flex flex-column"
            onSubmit={onSubmitHandler}
            action=""
          >
            <input
              className="px-3 border rounded"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              className="mt-3 px-3 border rounded"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
