import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { HiMenu } from "react-icons/hi";

const Navbar = ({ location, getLocation, setOpenDropdown, openDropdown }) => {
    const { cartItem } = useCart();
    const [mobilemenu, setMobilemenu] = useState(false);

    const handleToggle = () => {
        setOpenDropdown(prev => !prev);
    };

    return (
        <div className="bg-white py-4 shadow-2xl h-20 relative">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-2">

                {/* LEFT SECTION */}
                <div className="flex items-center gap-8">
                    <Link to="/">
                        <h1 className="font-bold text-2xl sm:text-3xl tracking-wide">
                            <span className="text-red-600 font-serif">Z</span>aptro
                        </h1>
                    </Link>

                    {/* Address (desktop only) */}
                    <div className="hidden sm:flex gap-2 cursor-pointer items-center text-gray-700 hover:text-black transition">
                        <MapPin className="text-red-600" />
                        <span className="font-medium">
                            {location ? (
                                <div className="-space-y-1 leading-tight">
                                    <p>{location?.country}</p>
                                    <p className="text-sm">{location?.state}</p>
                                </div>
                            ) : (
                                "Add Address"
                            )}
                        </span>

                        <FaCaretDown className="text-gray-600" onClick={handleToggle} />
                    </div>

                    {/* Address Dropdown */}
                    {openDropdown && (
                        <div className="w-[250px] shadow-2xl z-50 bg-white fixed top-16 left-1/2 -translate-x-1/2 border-2 p-5 rounded-md">
                            <h1 className="font-semibold mb-4 text-xl flex justify-between">
                                Change Location
                                <span><CgClose onClick={() => setOpenDropdown(false)} /></span>
                            </h1>

                            <button
                                onClick={getLocation}
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 transition">
                                Detect my location
                            </button>
                        </div>
                    )}
                </div>

                {/* MIDDLE NAV (desktop) */}
                <nav className="hidden sm:block">
                    <ul className="flex gap-12 items-center text-lg font-semibold">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `pb-1 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-700 hover:text-red-600"}`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `pb-1 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-700 hover:text-red-600"}`
                            }
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `pb-1 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-700 hover:text-red-600"}`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `pb-1 ${isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-700 hover:text-red-600"}`
                            }
                        >
                            Contact
                        </NavLink>
                    </ul>
                </nav>

                {/* RIGHT SECTION */}
                <div className="flex items-center gap-6">

                    {/* Cart */}
                    <Link to="/cart" className="relative hover:scale-105 transition">
                        <IoCartOutline className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800 hover:text-red-600 transition" />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                            {cartItem.reduce((total, item) => total + Number(item.qty || 0), 0)}
                        </span>
                    </Link>

                    {/* Hamburger */}
                    <HiMenu
                        className="h-8 w-8 text-gray-800 block sm:hidden active:scale-75 transition"
                        onClick={() => setMobilemenu(true)}
                    />

                    {/* Auth (desktop only) */}
                    <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-4 py-1 shadow-sm bg-white hover:shadow-md transition">
                        <SignedOut>
                            <SignInButton>
                                <button className="text-gray-700 hover:text-red-600 font-medium">Sign In</button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
                        </SignedIn>
                    </div>
                </div>

            </div>

            {/* OVERLAY */}
            {mobilemenu && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
                    onClick={() => setMobilemenu(false)}
                ></div>
            )}

            {/* MOBILE DRAWER */}
            {mobilemenu && (
                <div className="
                    fixed top-0 right-0 h-full w-3/4 max-w-xs
                    bg-gray-900 text-white z-50 
                    flex flex-col gap-6 py-10 px-6 
                    shadow-xl rounded-l-2xl
                    transform transition-all duration-300
                    animate-[slideIn_0.3s_ease-out]
                ">

                    {/* Close */}
                    <CgClose
                        className="absolute top-5 right-5 text-3xl text-gray-300 hover:text-red-500 transition cursor-pointer"
                        onClick={() => setMobilemenu(false)}
                    />

                    {/* Mobile Nav Links */}
                    <div className="flex flex-col space-y-6 mt-10">
                        <NavLink className="text-lg font-semibold tracking-wide hover:text-red-400 transition" to="/" onClick={() => setMobilemenu(false)}>Home</NavLink>
                        <NavLink className="text-lg font-semibold tracking-wide hover:text-red-400 transition" to="/products" onClick={() => setMobilemenu(false)}>Products</NavLink>
                        <NavLink className="text-lg font-semibold tracking-wide hover:text-red-400 transition" to="/about" onClick={() => setMobilemenu(false)}>About</NavLink>
                        <NavLink className="text-lg font-semibold tracking-wide hover:text-red-400 transition" to="/contact" onClick={() => setMobilemenu(false)}>Contact</NavLink>
                    </div>

                    {/* Auth Mobile */}
                    <div className="mt-8">
                        <SignedOut>
                            <SignInButton>
                                <button className="bg-red-500 text-white px-5 py-2 rounded-full font-medium hover:bg-red-400 transition">
                                    Sign In
                                </button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>

                </div>
            )}

        </div>
    );
};

export default Navbar;
