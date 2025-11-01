import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contect";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Order from "./Pages/Order";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div className="main_div">
      <div>
        <ToastContainer />
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/product/:ProductId" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
