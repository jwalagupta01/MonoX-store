import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Additem from "./page/Additem";
import ListItem from "./page/ListItem";
import Orders from "./page/Orders";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/add-items" element={<Additem />} />
        <Route path="/item-list" element={<ListItem />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
