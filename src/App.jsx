import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/AppNavigation";
import About from "./components/about";
import User from "./components/User";
import Routing from "./utils/routing";

function App() {
  return (
    <div className="">
      
      <Navbar />
      <Routing />
    </div>


  );
}

export default App;
