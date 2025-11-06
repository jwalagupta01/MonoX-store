import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Additem from "./page/Additem";
import ListItem from "./page/ListItem";
import Orders from "./page/Orders";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";

const App = () => {
  const [token, setToken] = useState("5");

  return (
    <div className="px-5 py-3">
      {token === "" ? (
        <Login />
      ) : (
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Sidebar />
          </div>
          <Routes>
            <Route path="/" element />
            <Route path="/add-items" element={<Additem />} />
            <Route path="/item-list" element={<ListItem />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
