import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Optional: Show a success message
    alert("Message sent successfully!");

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center py-12 px-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>

        {/* NAME */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none border border-gray-300 focus:border-red-500 focus:bg-white transition"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none border border-gray-300 focus:border-red-500 focus:bg-white transition"
            required
          />
        </div>

        {/* PHONE */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none border border-gray-300 focus:border-red-500 focus:bg-white transition"
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your message here..."
            className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none border border-gray-300 focus:border-red-500 focus:bg-white transition resize-none"
            required
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-500 transition shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
