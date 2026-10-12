
import React, { useState } from "react";
import Songs from "./components/songs";
import Navbar from "./components/navbar";

function App() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3EOLeNi0h3A4JOLth5AMF1tvTEqeDJBloLdYay3qnA&s=10",
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      added: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuc60ex2PBsbCMnWa90Hkm_tBEA7ZGPlp3X8V9-VagQ&s=10",
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      duration: "3:53",
      added: false,
    },
    {
      image:
        "https://images.genius.com/4136ca8f6c03bd2fbc30c8d75407de75.1000x1000x1.png",
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      added: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_bc1qHpTX4A5GFeSU94W2M--IiitFtf2KIMe7atz3A&s=10",
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
      added: true,
    },
  ];

  const [songs, setSongs] = useState(data);

  const handleClick = (itemIndex) =>{
    setSongs((prev)=>{
      return prev.map((item,index)=>{
        if(itemIndex === index) return{...item,added : !item.added}
        return item;
      })
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar data = {songs} />

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Your Music
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((obj, index) => (
            <Songs key={index} songdata={obj} handleClick={handleClick} itemIndex={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
