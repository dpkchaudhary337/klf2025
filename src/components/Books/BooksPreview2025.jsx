import React, { useState } from "react";

import China from "../../assets/Books/2025/China.jpg";
import Eminent from "../../assets/Books/2025/Eminent.jpg";
import lalitAditya from "../../assets/Books/2025/lalitAditya.jpg";
import Reflection from "../../assets/Books/2025/Reflection.jpg";
import Shaitan from "../../assets/Books/2025/Shaitan.jpg";

import { Link } from "react-router-dom";

export const BooksPreview2025 = () => {
  const images = [China, Eminent, lalitAditya, Reflection, Shaitan];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Book Section */}
      <div className="relative w-full py-16 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Book Launches in KLF 2025
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Celebrating New Voices in Literature
            </p>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md 
                transition-all duration-500 cursor-pointer transform 
                hover:-translate-y-3 hover:shadow-2xl hover:rotate-1"
              >
                <img
                  src={src}
                  alt={`Books ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-sm font-medium">View Image</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ View All Button */}
          <div className="text-center mt-10">
            <Link
              to="/books/2025"
              className="px-6 py-2 bg-[#D86B27] text-white rounded-lg shadow hover:bg-[#b8551f] transition"
            >
              View All Books
            </Link>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            {/* Image Wrapper */}
            <div className="relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-400 z-[10000]"
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>

              {/* Displayed Image */}
              <img
                src={images[selectedIndex]}
                alt={`Gallery Large ${selectedIndex + 1}`}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Prev Button */}
            <button
              className="absolute left-6 text-white text-4xl font-bold hover:text-gray-400"
              onClick={handlePrev}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              className="absolute right-6 text-white text-4xl font-bold hover:text-gray-400"
              onClick={handleNext}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </>
  );
};
