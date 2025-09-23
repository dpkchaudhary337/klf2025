import React, { useState, useRef, useEffect } from "react";
import calenderBg from "../../assets/klfCalender/calenderBg.png";
import leafs from "../../assets/klfCalender/claenderLeafs.png";
import kashmirC from "../../assets/klfCalender/kashmirCoisine.png";
import exprience from "../../assets/klfCalender/experience.png";
import book from "../../assets/klfCalender/bookLaunch.png";
import music from "../../assets/klfCalender/music.png";
import dialouge from "../../assets/klfCalender/dialouges.png";
import engaging from "../../assets/klfCalender/engaging.png";
import klfImage from "../../assets/klfCalender/klfImage.png";
import allBook from "../../assets/klfCalender/allBook.png";

export const KlfCalender = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const calendarItems = [
    {
      id: 1,
      image: book,
      title: "Book Launch & Discussions",
      action: () => setShowPopup(true),
    },
    { id: 2, image: exprience, title: "Experience the Dal Lake view" },
    { id: 3, image: kashmirC, title: "Kashmiri Cuisine" },
    { id: 4, image: dialouge, title: "Dialogues and Interactions" },
    { id: 5, image: engaging, title: "Exhibitions and Bookstores" },
    { id: 6, image: music, title: "Cultural Gala Evenings" },
  ];

  return (
    <div
      className="relative">
      {/* Gradient Overlay */}
      <div className="w-full pb-12 h-full bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 flex flex-col items-center text-black font-inter">
        {/* Header */}
        <div className="flex flex-col items-center text-center mt-10 mb-8 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-purple-700 drop-shadow-sm">
            #KLF2024 Calendar
          </h1>
          <p className="text-lg md:text-2xl mt-3 font-semibold text-gray-800">
            7th & 8th December
          </p>

          <div className="flex mt-3 items-center space-x-2">
            <img src={leafs} alt="leaf" className="h-8 rotate-[-35deg]" />
            <p className="text-lg font-medium">Theme:</p>
            <img src={leafs} alt="leaf" className="h-8" />
          </div>

          <p className="italic text-gray-700 mt-2 text-base md:text-lg">
            "Kashmir - The ancient powerhouse of wisdom"
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-1 px-2 max-w-6xl w-full">
          {calendarItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer p-[5px]"
              onClick={item.action || null}
            >
              <div className="rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
              </div>
              <h2 className="text-md md:text-lg font-semibold mt-3 text-gray-800 group-hover:text-purple-700 transition">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/70 z-50 p-4">
          <div
            ref={popupRef}
            className="bg-white rounded-3xl p-6 max-w-4xl w-full flex flex-col items-center md:h-[90vh] overflow-y-auto relative shadow-2xl animate-fadeIn"
          >
            <button
              className="absolute right-4 top-4 font-bold text-white px-3 py-1 rounded-full bg-red-500 hover:bg-red-600 transition"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <img
              src={klfImage}
              alt="Kashmir Literature Festival"
              className="w-full rounded-lg shadow-md"
            />
            <h2 className="text-3xl md:text-4xl text-[#B88908] font-bold text-center uppercase my-10">
              Books Featuring at KLF
            </h2>
            <div className="flex justify-center items-center">
              <img
                src={allBook}
                alt="Books"
                className="w-[75vw] lg:w-[55vw] h-auto rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};