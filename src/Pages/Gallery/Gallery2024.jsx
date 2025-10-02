import React, { useState } from "react";
import img1 from "../../assets/gallery/2024/img1.jpg";
import img2 from "../../assets/gallery/2024/img2.jpg";
import img3 from "../../assets/gallery/2024/img3.jpg";
import img4 from "../../assets/gallery/2024/img4.jpg";
import img5 from "../../assets/gallery/2024/img5.jpg";
import img6 from "../../assets/gallery/2024/img6.jpg";
import img7 from "../../assets/gallery/2024/img7.jpg";
import img8 from "../../assets/gallery/2024/img8.jpg";
import img9 from "../../assets/gallery/2024/img9.jpg";
import img10 from "../../assets/gallery/2024/img10.jpg";
import img11 from "../../assets/gallery/2024/img11.jpg";
import img12 from "../../assets/gallery/2024/img12.jpg";
import img13 from "../../assets/gallery/2024/img13.jpg";
import img14 from "../../assets/gallery/2024/img14.jpg";
import img15 from "../../assets/gallery/2024/img15.jpg";

export const Gallery2024 = () => {
  const images = [
    img11,
    img15,
    img13,
    img2,
    img3,
    img4,
    img1,
    img5,
    img14,
    img12,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative w-full bg-cover bg-center py-16">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Gallery KLF 2024
            </h2>
           
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-sm font-medium">View Image</p>
                </div>
              </div>
            ))}
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
