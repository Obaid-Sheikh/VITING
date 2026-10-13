import React from "react";
import { useParams , useNavigate } from "react-router-dom";

function IntoUsers() {
  const {name} =  useParams();
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/user");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">{name} </h1>
      <p className="text-lg text-gray-700">
        our first users 
      </p>
      <button onClick={() => goBackHandler()} className = "m-4 px-2 py-3 bg-blue-600 rounded-md text-lg">
        Go Back
      </button>
    </div>
  );
}

export default IntoUsers;