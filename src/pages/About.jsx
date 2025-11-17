import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src="./Zaptro.png" width={800}   height={800}
                    alt="About Zaptro"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-red-600">Zaptro</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-gray-800">Zaptro</span>, 
            your trusted destination for quality products at the best prices.
            We aim to make online shopping effortless, enjoyable, and accessible
            for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            From trendy fashion to premium essentials, we curate a wide range of 
            items designed to elevate your lifestyle. Our goal is simple: deliver 
            great value, style, and convenience—all in one place.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With fast delivery, secure checkout, and a commitment to customer 
            satisfaction, Zaptro continues to grow as your favorite shopping 
            partner. We’re here to bring joy to your everyday purchases.
          </p>

        
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
