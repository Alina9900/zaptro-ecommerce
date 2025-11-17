import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const { cartItem, increaseQty, decreaseQty, removeFromCart } = useCart();

  // subtotal calculation
  const subtotal = cartItem.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {/* EMPTY CART */}
      {cartItem.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Your cart is empty
          </h2>

          <Link
            to="/products"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Shop Now
          </Link>
        </div>
      )}

      {/* CART ITEMS */}
      {cartItem.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT SIDE — ITEMS */}
          <div className="md:col-span-2 space-y-5">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex p-4 bg-white rounded-xl shadow border"
              >
                {/* IMAGE */}
                <div className="h-28 w-28 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full"
                  />
                </div>

                {/* DETAILS */}
                <div className="ml-4 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-lg font-semibold line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-lg font-bold text-red-600 mt-2">
                      ${item.price}
                    </p>
                  </div>

                  {/* QTY + REMOVE */}
                  <div className="flex items-center justify-between mt-4">
                    
                    {/* Qty Controls */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-4 py-1">{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      className="flex items-center gap-1 text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IoTrashOutline size={18} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE — ORDER SUMMARY */}
          <div className="p-5 bg-white rounded-xl shadow border h-fit space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <hr className=" border-gray-400 opacity-70"/>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
