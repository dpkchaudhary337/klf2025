import React from "react";
import { Link } from "react-router-dom";
import speakers from "../../speakers2024";

const SpeakersPreview2024 = () => {
  // sirf 12 speakers preview ke liye
  const previewSpeakers = speakers.slice(0, 12);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
           Speakers KLF 2024
        </h2>
        
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {previewSpeakers.map((speaker, index) => (
          <Link
            to={`/speaker/${speaker.id}`}
            key={speaker.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl block"
            data-aos="fade-up"
            data-aos-delay={index * 100} // staggered effect
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center">
              <h4 className="text-sm font-semibold text-gray-900">
                {speaker.name}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{speaker.role}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
        <Link
          to="/speakers/2024"
          className="px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white rounded-lg shadow hover:bg-[#b8551f] transition"
        >
          View All Speakers
        </Link>
      </div>
    </div>
  );
};

export default SpeakersPreview2024;
