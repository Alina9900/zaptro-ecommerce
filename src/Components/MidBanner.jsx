import React from "react";
import banner from "../assets/banner.png";

const MidBanner = () => {
  return (
    <div className="py-20 flex justify-center 
    bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">

      {/* Banner Container */}
      <div
        className="
          relative w-full max-w-7xl h-[450px] md:h-[550px]
          rounded-3xl overflow-hidden shadow-2xl
          bg-linear-to-br from-purple-700/40 via-pink-500/20 to-transparent
        "
      >

        {/* Clickable Image */}
        <a href="/products" className="block w-full h-full">
          <img
            src={banner}
            alt="banner"
            className="
              w-full h-full object-cover 
              hover:scale-105 transition-transform duration-700
            "
          />
        </a>

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </div>
  );
};

export default MidBanner;
