
import React from "react";

function Navbar({data}) {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 md:px-10 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Left: Downloaded songs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <svg
              className="w-5 h-5 text-gray-700"
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
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Downloaded Songs
            </h2>
            <p className="text-xs text-gray-500">
              { data.filter(item => item.added).length }
            </p>
          </div>
        </div>

        {/* Right: YouTube Music branding */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 48 48"
            className="w-9 h-9"
            aria-label="YouTube Music icon"
            role="img"
          >
            <circle cx="24" cy="24" r="22" fill="#FF0033" />
            <circle
              cx="24"
              cy="24"
              r="12"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <path d="M21 18.5L30 24L21 29.5Z" fill="white" />
          </svg>

          <span className="text-lg font-semibold text-gray-900">
            Music
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
