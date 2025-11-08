import React, { useContext, useEffect, useState } from "react";
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import { ShopContext } from "../../Context/ShopContextProvider";
import { toast } from "react-toastify";
import axios from "axios";

const RegisterPage = () => {
  const { BackendURL, token, setToken } = useContext(ShopContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(BackendURL + "/user/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("Register SuccessFully");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        toast.error(response.data.message);
        setName("");
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
    <div className="sign_up_div d-flex align-items-center justify-content-center">
      <div className="sign_up_box d-flex flex-column border rounded p-3 align-items-center justify-content-center">
        <div>
          <CollectionTitle txt1={"Sign"} txt2={"Up"} />
        </div>
        <form
          action=""
          onSubmit={onSubmitHandler}
          className="sing_up_form d-flex flex-column"
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-100 rounded px-3 border border-dark"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-100 rounded px-3 mt-3 border border-dark"
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-100 rounded px-3 mt-3 border border-dark"
          />
          <div className="d-flex justify-content-end pe-3 mt-3">
            <p className="fw-semibold text-dark">
              Already Account:-{" "}
              <Link to={"/login"} className="text-primary fw-bold">
                Login
              </Link>
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
