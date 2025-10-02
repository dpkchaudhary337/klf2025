import React, { useState } from "react";
import KLF2024 from "./KLF2024"; 
import SpeakersPreview2024 from "../Speakers/SpeakersPreview2024";
import { PartnersPreview2024 } from "../Partners/PartnersPreview2024";
import Highlights2024 from "./Highlights2024";
import { GalleryPreview2024 } from "../Gallery/GalleryPreview2024";
import { MediaPreview2024 } from "../NewsMedia/MediaPreview2024";
import Performances2024 from "../Performance/Performances2024";
import { BooksPreview2024 } from "../Books/BooksPreview2024";

export default function Archive() {
  const [activeYear, setActiveYear] = useState("2024");

  const years = ["2024"]; // later add ["2024","2025","2026"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F0] to-white">
      {/* Hero / Title Section */}
      <section
        className="relative w-full bg-gradient-to-r from-[#6B2E5E] via-[#A84374] to-[#E26A2C] py-16 shadow-md rounded-b-3xl"
        data-aos="fade-down"
      >
        <div className="text-center px-6">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Kashmir Literature Festival <br />
          </h1>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </section>

      {/* Tabs */}
      <div
        className="flex justify-center space-x-6 border-b border-gray-300 mt-10"
        data-aos="fade-up"
      >
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
            Archive {year}
          </button>
        ))}
      </div>

      {/* Year Content */}
      <div data-aos="fade-up">
        <Highlights2024 />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <SpeakersPreview2024 />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <PartnersPreview2024 />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Performances2024 />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <GalleryPreview2024 />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <BooksPreview2024 />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <MediaPreview2024 />
      </div>
    </div>
  );
}
