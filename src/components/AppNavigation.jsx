import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
  return(
    <>
      <nav className="bg-zinc-200 p-4 flex justify-center gap-8  space-x-4">
        <NavLink to="/home" className={(e) => {
          return [
            e.isActive ? "text-blue-500 font-bold" : "text-gray-700",
            e.isActive ? "underline" : "no-underline"
          ].join(" ");
        }}>
          Home
        </NavLink>
        <NavLink to="/about" className={(e) => {
          return [
            e.isActive ? "text-blue-500 font-bold" : "text-gray-700",
            e.isActive ? "underline" : "no-underline",
          ].join(" ");
        }}>
          About
        </NavLink>
        <NavLink to="/user" className={(e) => {
          return [
            e.isActive ? "text-blue-500 font-bold" : "text-gray-700",
            e.isActive ? "underline" : "no-underline"
          ].join(" ");
        }}>
          Users
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;