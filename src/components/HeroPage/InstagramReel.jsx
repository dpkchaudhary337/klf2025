import React, { useRef, useEffect, useState } from "react";

export const InstagramReels = () => {
  const reelContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (reelContainerRef.current) {
      observer.observe(reelContainerRef.current);
    }

    return () => {
      if (reelContainerRef.current) {
        observer.unobserve(reelContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Load Elfsight Instagram Feed script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={reelContainerRef}
      className="relative w-full h-auto py-10 bg-white overflow-hidden font-inter"
    >
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">Instagram</h2>
        <p className="text-lg text-black mt-3">
          Stay updated with our latest stories, trends, and behind-the-scenes moments
        </p>
      </div>

      {/* Elfsight Instagram Feed */}
      <div className="mt-10 flex justify-center">
        <div
          className="elfsight-app-1b89e839-3079-4a2a-b2ec-ada837b6c8dc w-full max-w-7xl"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};
