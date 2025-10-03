import React, { useState } from "react";
import flowerPoppy from "../../assets/Poppy-8.png";
import eventsData from "../../programme";

// Helper to format date + time
const formatDateTime = (day, time) => {
  const dateMatch = day.match(
    /(?:\w+,?\s*)?(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})/
  );
  if (!dateMatch) return day;

  const [, datePart, monthPart, yearPart] = dateMatch;
  const formattedDate = `${monthPart.slice(0, 3)}-${datePart}-${yearPart}`;

  const [start, end] = time.split("-");

  const formatTime = (t) => {
    if (!t || t.toLowerCase().includes("onwards")) return t;
    const [h, m] = t.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
  };

  if (!end) return `${formattedDate} | ${formatTime(start)}`;
  return `${formattedDate} | ${formatTime(start)} - ${formatTime(end)}`;
};

const Programme = () => {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (idx) => {
    setOpenDay(openDay === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="flex items-center justify-center mb-12 gap-4"
          data-aos="fade-down"
        >
          <h1 className="text-5xl md:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-center drop-shadow-lg">
            KLF 2025 Calendar
          </h1>
        </div>

        {eventsData.map((dayItem, idx) => (
          <div
            key={idx}
            className="mb-6 border rounded-xl overflow-hidden shadow-md"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {/* Collapse Header */}
            <button
              onClick={() => toggleDay(idx)}
              className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 px-6 py-4 text-left text-white font-bold text-lg sm:text-xl gap-2"
              data-aos="fade-right"
            >
              <span>{dayItem.day}</span>
              <span className="text-lg">{openDay === idx ? "▲" : "▼"}</span>
            </button>

            {/* Collapse Body */}
            {openDay === idx && (
              <div
                className="bg-white p-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="relative border-l-2 border-gray-300 pl-2">
                  {dayItem.events.map((event, i) => (
                    <div
                      key={i}
                      className="mb-8 relative bg-white/95 p-6 rounded-xl border border-[#E1E1E1]"
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-4 w-4 h-4 rounded-full border-2 border-white top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600"></span>

                      {/* Title + Time Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                          {event.title}
                        </h3>
                        <span className="inline-block w-fit px-3 py-1 text-xs sm:text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-orange-500 via-pink-500 to-red-600">
                          {formatDateTime(dayItem.day, event.time)}
                        </span>
                      </div>

                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programme;
