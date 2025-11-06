import React from "react";
import { Routes, Route } from "react-router-dom";
import Additem from "./page/Additem";
import ListItem from "./page/ListItem";
import Orders from "./page/Orders";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="px-5 py-3">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/add-items" element={<Additem />} />
        <Route path="/item-list" element={<ListItem />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
