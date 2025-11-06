import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Additem from "./page/Additem";
import ListItem from "./page/ListItem";
import Orders from "./page/Orders";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import { ToastContainer } from "react-toastify";

export const backendURL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="px-5 py-3">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div>
          <div>
            <Navbar setToken={setToken} />
          </div>
          <div className="d-flex">
            <div className="sidebar_div">
              <Sidebar />
            </div>
            <div className="item_div">
              <Routes>
                <Route path="/" element />
                <Route path="/add-items" element={<Additem token={token} />} />
                <Route path="/item-list" element={<ListItem token={token} />} />
                <Route path="/order" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
