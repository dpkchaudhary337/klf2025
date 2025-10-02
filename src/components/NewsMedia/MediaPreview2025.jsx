import React, { useEffect, useRef, useState } from "react";
import newsBg from "../../assets/newsMedia/2024/mediaBg.png";
import news1 from "../../assets/newsMedia/2025/Media1.png";
import news2 from "../../assets/newsMedia/2025/Media2.png";
import news3 from "../../assets/newsMedia/2025/Media3.png";
import news4 from "../../assets/newsMedia/2025/Media4.png";
import news5 from "../../assets/newsMedia/2025/Media5.png";

export const MediaPreview2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sectionRef = useRef(null);

  const newsItems = [
    { title: "KLF 2025: Celebrating Art and Culture in Kashmir", image: news1 },
    { title: "Stories in the Snow: Kashmir Literature Festival Showcases Regional and Global Talent", image: news2 },
    { title: "KLF 2025: A Cultural Extravaganza Uniting Literature, Art, and Music in Kashmir", image: news3 },
    { title: "From Authors to Performers: Kashmir Literature Festival Revives the Spirit of the Valley", image: news4 },
    { title: "From Authors to Performers: Kashmir Literature Festival Revives the Spirit of the Valley", image: news5 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft" && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
      if (e.key === "ArrowRight" && selectedIndex < newsItems.length - 1) setSelectedIndex(selectedIndex + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, newsItems.length]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${newsBg})` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 data-aos="fade-up" className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Media Coverage KLF 2025
        </h2>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer`}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            const clickedEl = e.target;
            if (clickedEl.tagName !== "IMG" && !clickedEl.classList.contains("arrow-btn")) {
              setSelectedIndex(null);
            }
          }}
        >
          <div className="max-w-[90vw] w-full relative flex flex-col items-center">
            {/* Left Arrow */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex - 1); }}
                className="arrow-btn absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl z-[10001] hover:text-gray-400"
              >
                ‹
              </button>
            )}
            {/* Right Arrow */}
            {selectedIndex < newsItems.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex + 1); }}
                className="arrow-btn absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl z-[10001] hover:text-gray-400"
              >
                ›
              </button>
            )}
            {/* Image */}
            <img
              src={newsItems[selectedIndex].image}
              alt={newsItems[selectedIndex].title}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-xl"
            />
            {/* Caption */}
            <p className="mt-4 text-center text-white text-lg max-w-xl mx-auto px-4 bg-black/50 rounded-md py-2">
              {newsItems[selectedIndex].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
