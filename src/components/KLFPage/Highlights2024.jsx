import React from "react";
import flowerPoppy from "../../assets/Poppy-8.png";

const highlights = [
  { number: "40M+", text: "Digital Reach", color: "bg-yellow-200" },
  { number: "30M+", text: "Session Views", color: "bg-blue-200" },
  { number: "100+", text: "Speakers", color: "bg-orange-200" },
  { number: "500+", text: "Media Coverage", color: "bg-red-200" },
  { number: "10+", text: "Languages", color: "bg-pink-200" },
  { number: "25+", text: "Book Launches", color: "bg-purple-200" },
];

export default function Highlights2024() {
  return (
    <section className="relative py-16 bg-[#f4eddc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side - Title */}
        <div className="text-center md:text-left relative">
          <h2 className="text-5xl font-extrabold text-blue-900 drop-shadow-lg mb-4">
            Key Highlights
          </h2>
          <p className="text-4xl text-pink-600 font-semibold">2024</p>
        </div>

        {/* Right Side - Facts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-md text-center ${item.color}`}
            >
              <h3 className="text-2xl font-bold text-blue-900">{item.number}</h3>
              <p className="text-sm text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
