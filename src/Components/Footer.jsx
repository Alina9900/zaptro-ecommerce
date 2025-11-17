import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-red-500 font-serif mb-4">Zaptro</h3>
          <p className="text-sm mb-4">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="text-sm">123 Electronics St, Style City, NY 10001</p>
          <p className="text-sm">Email: support@Zaptro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/contact">Contact Us</Link></li>
            <li><Link className="hover:text-white">Shipping & Returns</Link></li>
            <li><Link className="hover:text-white">FAQs</Link></li>
            <li><Link className="hover:text-white">Order Tracking</Link></li>
            <li><Link className="hover:text-white">Size Guide</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-5 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaPinterestP /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay in the Loop</h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and more.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-gray-800 text-gray-200 px-4 py-2 rounded-l-md outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-r-md text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()}
        <span className="text-red-500 font-bold"> Zaptro </span>
        All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
