import React from "react";

function Songs() {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3EOLeNi0h3A4JOLth5AMF1tvTEqeDJBloLdYay3qnA&s=10",
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuc60ex2PBsbCMnWa90Hkm_tBEA7ZGPlp3X8V9-VagQ&s=10",
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide",
      duration: "3:53",
    },

    {
      image:
        "https://images.genius.com/4136ca8f6c03bd2fbc30c8d75407de75.1000x1000x1.png",
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_bc1qHpTX4A5GFeSU94W2M--IiitFtf2KIMe7atz3A&s=10",
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
    },
  ];

  const handleDownload = (item) => {
              alert(`Downloading ${item.name} by ${item.artist} has started!`);
            }
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full max-w-2xl p-4 bg-gray-900 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt="Album Cover"
              className="w-14 h-14 rounded-lg object-cover"
            />

            <div>
              <h3 className="text-white font-semibold text-base">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.artist} • {item.album}
              </p>

              <span className="text-gray-500 text-xs">{item.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <button onClick={() => handleDownload(item)} className="p-2 text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Songs;
