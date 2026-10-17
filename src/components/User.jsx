import React, { use } from "react";
import { useContext } from "react";
import { UserContext } from "../utils/Context.jsx";

function User() {
  const { user, setUser } = useContext(UserContext);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Users</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {user.map((item, index) => {
          return (
            <div key={index} className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                {item.name.firstname.charAt(0).toUpperCase()}
              </div>

              <h2 className="text-xl font-semibold text-gray-800">{item.name.firstname} {item.name.lastname}</h2>

              <p className="text-sm text-gray-500">@{item.username}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>City: {item.address.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;
