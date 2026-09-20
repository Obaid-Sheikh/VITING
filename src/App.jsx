import React, { useState } from "react";
import Card from "./components/card";
import Songs from "./components/songs";

function App() {
  const [val, setVal] = useState({
    name: "obaid",
    banned: false,
  });

  return (
    //     <>
    //     <Card />
    //     <Songs />
    //     </>
    <div className="p-4 ">
      <h1>Name : {val.name}</h1>
      <h1>Banned: {val.banned.toString()}</h1>

      <button
        onClick={() => setVal({ ...val, banned: !val.banned })}
        className={`px-4 py-2 ${!val.banned ? "bg-blue-500" : "bg-red-500"} text-white rounded-full`}
      >
        Change
      </button>
    </div>
  );
}

export default App;
