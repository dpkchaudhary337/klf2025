// klf2025.jsx
import React from "react";

const eventsData = [
  {
    day: "11th October 2025",
    events: [
      {
        time: "09:00 AM - 10:00 AM",
        title: "Opening Ceremony",
        venue: "Main Hall, SKICC",
        description: "Kick off the festival with welcome speeches and lighting of the lamp.",
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Book Launch: Kashmir Poetry",
        venue: "Conference Room A",
        description: "Launch of the new poetry book featuring local poets.",
      },
      {
        time: "12:00 PM - 01:00 PM",
        title: "Panel Discussion: Literature & Society",
        venue: "Main Hall, SKICC",
        description: "Experts discuss the role of literature in modern society.",
      },
      // Add more events for 11th Oct here
    ],
  },
  {
    day: "12th October 2025",
    events: [
      {
        time: "09:00 AM - 10:00 AM",
        title: "Morning Yoga & Reading Session",
        venue: "Open Garden Area",
        description: "Start your day with yoga and reading sessions for kids.",
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Book Launch: Himalayan Tales",
        venue: "Conference Room B",
        description: "Launch of adventure and travel stories from the Himalayas.",
      },
      {
        time: "05:00 PM - 06:00 PM",
        title: "Closing Ceremony",
        venue: "Main Hall, SKICC",
        description: "Wrap up the festival with awards and cultural performances.",
      },
      // Add more events for 12th Oct here
    ],
  },
];

const KLF2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10">
          📅 KLF 2025 Event Calendar
        </h1>

        {eventsData.map((dayItem, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-pink-700 mb-6 border-b-2 border-pink-300 pb-2">
              {dayItem.day}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dayItem.events.map((event, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-sm text-gray-500 font-semibold">{event.time}</p>
                  <h3 className="text-xl font-bold text-purple-700 my-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{event.venue}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KLF2025;