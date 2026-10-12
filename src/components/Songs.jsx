import React from "react";

function Songs({ songdata , handleClick ,itemIndex} ) {
  const { image, name, artist, album, duration , added} = songdata;

  return (
    <div className="w-full flex items-center justify-between gap-3 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Song information */}
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={image}
          alt={`${name} album cover`}
          className="w-14 h-14 shrink-0 rounded-lg object-cover"
        />

        <div className="min-w-0">
          <h3 className="text-white font-semibold text-base truncate">
            {name}
          </h3>

          <p className="text-gray-400 text-sm truncate">
            {artist} • {album}
          </p>

          <span className="text-gray-500 text-xs">{duration}</span>
        </div>
      </div>

      {/* Play and download buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          aria-label={`Play ${name}`}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
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

        <button
          onClick={()=>handleClick(itemIndex)}
          type="button"
          aria-label={added ? "Already added" : "Add to downloads"}
          className={`p-2 transition-colors ${
            added ? "text-green-500" : "text-gray-400 hover:text-white"
          }`}
        >
          {added ? (
            // Added: checkmark icon
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            // Not added: original download icon
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
          )}
        </button>
      </div>
    </div>
  );
}

export default Songs;
