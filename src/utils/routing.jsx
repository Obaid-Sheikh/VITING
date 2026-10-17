import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import User from "../components/User";
import Navbar from "../components/AppNavigation";
import Products from "../components/Products";




function Routing() {
  
  return (
    <div className="">
      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="/home" element = {<Home />} /> 
        <Route path ="/about" element = {<About />} />
        <Route path ="/user" element = {<User />} />

        <Route path ="/products" element = {<Products />} />
      </Routes>
    </div>


  );
}

export default Routing;