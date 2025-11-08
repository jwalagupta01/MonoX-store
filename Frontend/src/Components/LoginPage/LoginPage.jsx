import React, { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { ShopContext } from "../../Context/ShopContextProvider";
import axios from "axios";

const LoginPage = () => {
  const { BackendURL, token, setToken } = useContext(ShopContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(BackendURL + "/user/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        toast.success("Login Successfully");
        navigate("/");
      } else {
        toast.error(response.data.message);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="login_div">
      <div className="border rounded p-3">
        <CollectionTitle txt2={"Login"} />
        <form
          action=""
          onSubmit={onSubmitHandler}
          className="login_form d-flex flex-column justify-content-center align-items-center"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-3 rounded border border-dark"
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
