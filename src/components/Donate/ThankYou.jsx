import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/gallery/2024/galleryBg.png";
import logo from "../../assets/srikulalogo.png";

export function ThankYou() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/95 rounded-2xl shadow-xl p-8 text-center max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="w-16 h-16 rounded-full shadow" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Thank You for Your Donation!
        </h2>
        <p className="text-gray-700 mb-4">
          We sincerely appreciate your generous support towards{" "}
          <span className="font-semibold">Srikula Foundation</span>.  
          Your contribution helps us continue our mission and empower lives.
        </p>

        {/* Acknowledgement */}
        <div className="bg-green-100 text-green-800 rounded-md p-4 mb-6">
          <h3 className="text-lg font-semibold mb-1">Your payment was successful. </h3>
          
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block text-white px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
