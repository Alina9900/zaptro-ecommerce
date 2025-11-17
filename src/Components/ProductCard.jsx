import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const {cartItem,addToCart}=useCart()
  return (
    <div className="p-3 w-full max-w-sm">
      <div className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="p-4 flex flex-col gap-3">

          {/* Product Image */}
          <Link to={`/product/${item.id}`}>
            <div className="w-full h-52 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain h-full w-full hover:scale-105 transition-all duration-75"
              />
            </div>
          </Link>

          {/* Title */}
          <h2 className="text-lg font-semibold line-clamp-2">{item.title}</h2>

          {/* Price */}
          <p className="text-xl font-bold">$ {item.price}</p>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>

          {/* Add to Cart button */}
          <button
            className="w-full rounded-xl mt-2 bg-red-500 text-white py-2 
             hover:scale-103 hover:bg-red-700 
             flex items-center justify-center gap-1"
             onClick={()=>addToCart(item)}
          >
            <IoCartOutline size={24} />
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}
