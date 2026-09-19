import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1419222482462-d92ccdd0ef61?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardcontent: "birch trees",
      carddescription:
        "Explore the beauty of nature and discover amazing places.",
    },

    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      cardcontent: "Beautiful Mountains",
      carddescription:
        "Explore the beauty of nature and discover amazing places.",
    },

    {
      image:
        "https://images.unsplash.com/photo-1647954057523-8c0aba84b1bb?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardcontent: "woodland forests",
      carddescription:
        "Explore the beauty of nature and discover amazing places.",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-80 rounded-xl overflow-hidden shadow-lg bg-white"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={item.image}
            alt={item.cardcontent}
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">
              {item.cardcontent}
            </h2>

            <p className="mt-2 text-gray-600">{item.carddescription}</p>

            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
