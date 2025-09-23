import React, { useState } from "react";
import KLF2024 from "./KLF2024"; // make sure this has `export default KLF2024`
import SpeakersPreview2024 from "../Speakers/SpeakersPreview2024";
import { PartnersPreview2024 } from "../Partners/PartnersPreview2024";
import Highlights2024 from "./Highlights2024";
import { GalleryPreview2024 } from "../Gallery/GalleryPreview2024";
import { MediaPreview2024 } from "../NewsMedia/MediaPreview2024";
import Performances2024 from "../Performance/Performances2024";

export default function Archive() {
  const [activeYear, setActiveYear] = useState("2024");

  const years = ["2024"]; // later add ["2024","2025","2026"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F0] to-white">
      {/* Hero / Title Section */}
      <section className="relative w-full bg-gradient-to-r from-[#6B2E5E] via-[#A84374] to-[#E26A2C] py-16 shadow-md rounded-b-3xl">
        <div className="text-center px-6">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            The Festival Archives
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Relive the moments from Kashmir Literature Festival. Explore the
            journey through past editions and cultural highlights.
          </p>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </section>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b border-gray-300 mt-10">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-6 py-2 text-lg font-semibold transition-all duration-300 
              ${
                activeYear === year
                  ? "border-b-4 border-[#D86B27] text-[#D86B27]"
                  : "text-gray-600 hover:text-[#D86B27]"
              }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Year Content */}
      <div>
        <Highlights2024 />
      </div>
      <div>
        <SpeakersPreview2024 />
      </div>
      <div className="">
        <PartnersPreview2024 />
      </div>
      <div className="">
        <Performances2024 />
      </div>
      <div className="">
        <GalleryPreview2024 />
      </div>
      <div className="">
        <MediaPreview2024 />
      </div>
    </div>
  );
}
