import React from "react";
import { FiTruck, FiLock, FiRotateCcw, FiClock } from "react-icons/fi";

const Features = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">

        {/* Feature Item */}
        <div className="flex items-start gap-4">
          <FiTruck className="text-gray-700" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Free Shipping</h3>
            <p className="text-sm text-gray-500">On orders over $100</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiLock className="text-gray-700" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% protected payments</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiRotateCcw className="text-gray-700" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Easy Returns</h3>
            <p className="text-sm text-gray-500">30-day return policy</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiClock className="text-gray-700" size={32} />
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">24/7 Support</h3>
            <p className="text-sm text-gray-500">Dedicated customer service</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
