import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import SingleProduct from "./SingleProduct";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<CheckOut />}/>
          <Route path="/single-product" element={<SingleProduct />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
