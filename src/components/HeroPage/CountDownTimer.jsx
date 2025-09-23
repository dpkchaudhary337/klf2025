import React, { useEffect, useState } from "react";
import leftLeave from "../../assets/leftLeaves.png";
import rightLeave from "../../assets/rightLeaves.png";

export const CountDownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-11T09:00:00"); // Target date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center py-10 px-4 bg-gradient-to-r from-[#fdf6f0] to-[#fff]">
      {/* Left Leaf */}
      <img
        src={leftLeave}
        alt="Leaf"
        className="w-14 h-20 md:w-24 md:h-32 absolute left-2 md:left-8"
      />

      {/* Main Content */}
      <div className="flex flex-col items-center">
        {/* Title */}
        <h2 className="text-xl md:text-3xl font-bold text-[#893518] mb-6 text-center">
          Countdown to Kashmir Literature Festival 2025
        </h2>

        {/* Countdown Boxes */}
        <div className="flex space-x-3 md:space-x-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center w-16 h-20 md:w-24 md:h-28 rounded-2xl shadow-lg bg-gradient-to-b from-[#893518] to-[#5c220e] text-white"
            >
              <span className="text-2xl md:text-4xl font-extrabold">
                {value}
              </span>
              <span className="text-xs md:text-sm font-medium opacity-90">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Leaf */}
      <img
        src={rightLeave}
        alt="Leaf"
        className="w-14 h-20 md:w-24 md:h-32 absolute right-2 md:right-8"
      />
    </div>
  );
};
