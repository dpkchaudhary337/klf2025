import React, { useState } from "react";
import programBg from "../../assets/klfCalender/programBg.png";
import polygon from "../../assets/klfCalender/Polygon.png";

export const ProgramSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const programs = {
    1: [
      { time: "10:00 AM - 10:50 AM", title: "Opening Ceremony" },
      {
        time: "11:00 AM - 11:50 AM",
        title: "Kashmir: The Jewel Crown of Bharat",
        details:
          "Ravindra Pandita & Namrata Wokhloo in conversation with Ami Ganatra",
      },
      {
        time: "11:50 AM - 12:30 PM",
        title: "Let's zoom out on Kashmir",
        details:
          "Lt. Gen. D. P. Pandey (Retd) in conversation with Raja Muneeb & Shehla Rashid",
      },
      {
        time: "12:30 PM - 12:45 PM",
        title: "A Soulful Poetry Gig by Dr. Henana Berjes",
      },
      {
        time: "12:45 PM - 01:40 PM",
        title: "Integration or Exclusivity: The Road to Kashmir's Prosperity",
        details:
          "Mirwais Latief, Arun Prabhat, Azra Mufti & Emaad Makhdoomi in conversation with Jehanzeb Allagaband",
      },
      {
        time: "01:40 PM - 02:30 PM",
        title:
          "Nehru's First Recruits: The Diplomats Who Built Independent India's Foreign Policy",
        details:
          "Kallol Bhattacharjee & Amb. Kanwal Sibal in conversation with Chandrachur Ghose",
      },
      {
        time: "02:30 PM - 03:30 PM",
        title: "Book Launch - Yodha II : Illustrated Military History of India",
        details:
          "Launch by Lt. Gen. D. P. Pandey (Retd); Shiv Kunal Verma & Ramnik Singh Mann in conversation with Aadi Achint",
      },
      {
        time: "03:30 PM - 04:30 PM",
        title:
          "India's Experiments with Democracy : The Life of a Nation Through its Election",
        details:
          "Dr. S. Y. Quraishi & Dr. Ashok Lahiri in conversation with Kallol Bhattacharjee",
      },
      {
        time: "04:30 PM - 05:00 PM",
        title: "Enchanting Bharatnatyam Performances",
        details: "By Aishwarya Attri & Nandana Moulick",
      },
    ],
    2: [
      {
        time: "10:00 AM - 10:50 AM",
        title: "The Rules for the Rulers",
        details:
          "Ami Ganatra & Dr. Ashok Lahiri in conversation with Chandrachur Ghose",
      },
      {
        time: "10:50 AM - 11:30 AM",
        title: "The Half Front",
        details:
          "Lt. Gen. D. P. Pandey (Retd) & Ramnik Singh Mann in conversation with Shiv Kunal Verma",
      },
      {
        time: "11:30 AM - 12:20 PM",
        title: "Unearthing Bharatiya Heritage Through Archaeology",
        details: "Dr. S. K. Manjul in conversation with Namrata Wakhloo",
      },
      {
        time: "12:20 PM - 01:10 PM",
        title: "Women: The Better Half",
        details:
          "Prof. Nilofer Khan & Dr. Henana Berjes in conversation with Azra Mufti",
      },
      {
        time: "01:10 PM - 02:00 PM",
        title: "Role Model: Inspiring Stories of Indian Muslim Achievers",
        details:
          "Launch by Dr. S. Y. Quraishi & Amb. Kanwal Sibal; Shehla Rashid in conversation with Aadi Achint",
      },
      {
        time: "02:00 PM - 02:50 PM",
        title: "Bharat from the Lens of the World",
        details:
          "Amb. Kanwal Sibal & Dr. S. Y. Quraishi in conversation with Emaad Makhdoomi",
      },
      {
        time: "02:50 PM - 03:30 PM",
        title: "India in Search of Glory: Political Calculus and Economy",
        details: "Dr. Ashok Lahiri in conversation with Ami Ganatra",
      },
      {
        time: "03:30 PM - 05:00 PM",
        title: "Book Launch - Bose Deception: Declassified",
        details:
          "Launch by Lt. Gen. D. P. Pandey (Retd), Amb. Kanwal Sibal, Dr. Ashok Lahiri, & Dr. S. Y. Quraishi; Presentation by Anuj Dhar & Chandrachur Ghose",
      },
      { time: "05:00 PM - 05:30 PM", title: "Closing Ceremony" },
      { time: "05:30 PM Onwards", title: "Musical Gala Evening", details: "By ShashRang Band" },
    ],
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center">
      {/* Overlay Gradient */}
      <div className="w-full py-12 px-6 h-full bg-gradient-to-b from-purple-50/90 via-white/95 to-purple-100/90">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-purple-700 drop-shadow-sm">
            Program Schedule
          </h1>
          <p className="text-base md:text-xl text-gray-700 mt-3 font-medium">
            Discover the Essence of Kashmir Through Our Programs
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-3 rounded-full shadow-md font-medium transition-all ${
                activeDay === 1
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105"
                  : "border-2 border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <p className="text-xl font-bold">Day 1</p>
              <p className="text-sm">7th December 2024</p>
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-3 rounded-full shadow-md font-medium transition-all ${
                activeDay === 2
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105"
                  : "border-2 border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <p className="text-xl font-bold">Day 2</p>
              <p className="text-sm">8th December 2024</p>
            </button>
          </div>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {programs[activeDay].map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Time Divider */}
              <div className="flex items-center mb-3">
                <img
                  src={polygon}
                  alt="polygon"
                  className="w-20 h-[2px] opacity-60"
                />
                <h3 className="mx-3 text-sm md:text-base font-semibold text-gray-600">
                  {program.time}
                </h3>
                <img
                  src={polygon}
                  alt="polygon"
                  className="w-20 h-[2px] opacity-60 rotate-180"
                />
              </div>

              {/* Program Card */}
              <div className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-3xl shadow-lg transition-transform transform group-hover:-translate-y-2 group-hover:scale-105 min-h-[160px] flex flex-col justify-center">
                <h2 className="text-lg md:text-xl font-bold">{program.title}</h2>
                {program.details && (
                  <p className="text-sm md:text-base mt-2 opacity-90 font-medium">
                    {program.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};