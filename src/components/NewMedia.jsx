import React, { useEffect, useRef, useState } from "react";
import newsBg from "../assets/newsMedia/mediaBg.png";
import news1 from "../assets/newsMedia/image.png";
import news2 from "../assets/newsMedia/image 104.png";
import news3 from "../assets/newsMedia/Group 44496.png";
import news4 from "../assets/newsMedia/image 103 (1).png";

export const NewsMedia = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the component is in view
        } else {
          setIsVisible(false); // Reset when out of view (optional)
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const newsItems = [
    {
      title: "KLF 2024: Celebrating Art and Culture in Kashmir",
      image: news1,
    },
    {
      title: "Stories in the Snow: Kashmir Literature Festival Showcases Regional and Global Talent",
      image: news2,
    },
    {
      title: "KLF 2024: A Cultural Extravaganza Uniting Literature, Art, and Music in Kashmir",
      image: news3,
    },
    {
      title: "From author to Performers: Kashmir Literature Festival Revives the Spirit of the Valley",
      image: news4,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${newsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl    text-center mb-8 font-inter">
          Media Coverage
        </h2>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl overflow-hidden font-poppins">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl transition-all duration-3000 transform ${
                isVisible
                  ? index % 2 === 0
                    ? "translate-x-0 opacity-100"
                    : "translate-x-0 opacity-100"
                  : index % 2 === 0
                  ? "-translate-x-40 opacity-100"
                  : "translate-x-40 opacity-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full  "
              />
              <div className="py-4">
                <h3 className="text-sm font-semibold text-[#000000]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
