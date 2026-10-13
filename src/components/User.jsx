import React from "react";
import { Link, NavLink } from "react-router-dom";


function User(){
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Active Users</h1>
      <Link to="/user/jhon" className="text-lg text-blue-500 hover:underline bg-black m-3 p-2 rounded-md ">
        Jhon
      </Link>
      <Link to="/user/daisy" className="text-lg text-blue-500 hover:underline bg-black m-3 p-2 rounded-md ">
        Daisy
      </Link>
      <Link to="/user/Tanner" className="text-lg text-blue-500 hover:underline bg-black m-3 p-2 rounded-md ">
        Tanner
      </Link>

    </div>
  );
};

export default User;