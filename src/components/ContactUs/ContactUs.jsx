import React, { useState } from "react";
import inspireBg from "../../assets/Group 44493.png";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Mobile validation regex (10 digits, optional +91)
  const isValidMobile = (number) => /^(\+91)?[6-9]\d{9}$/.test(number);

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.contactNumber) {
      setError("Name, email, and contact number are required.");
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!isValidMobile(formData.contactNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    try {
      // DB save only, mail code removed
      const response = await fetch(`${API_BASE_URL}contactus.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setFormData({ name: "", email: "", contactNumber: "", message: "" });
        setTimeout(() => setSuccess(""), 5000); // success message auto-hide
      } else {
        setError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again later.");
    }
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${inspireBg})` }}
    >
      <div className="bg-white p-6 sm:p-8 shadow-lg w-full max-w-lg rounded-lg mx-4 h-full">
        <h2 className="text-2xl font-bold text-center text-[#BA451C] mb-6">
          Contact Us
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-700 text-sm sm:text-base">
              Phone Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              maxLength={10}
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              placeholder="Your Contact Number"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 resize-none text-sm sm:text-base"
              placeholder="Your Message (Optional)"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white font-medium py-2 text-sm sm:text-base bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
