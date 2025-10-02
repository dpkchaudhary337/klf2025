import React, { useState } from "react";
import flowerPoppy from "../../assets/Poppy-8.png";

const eventsData = [
  {
    day: "Saturday, 11th October 2025",
    events: [
      {
        time: "10:00-10:05",
        title: "Movie",
        venue: "KLF 2025",
        description:
          "Movie- Journey of Kashmir Literature Festival.",
      },
      {
        time: "10:05-10:10",
        title: "Address",
        venue: "KLF 2025",
        description: "Welcome address by Mrs. Usha pandey",
      },
      {
        time: "10:10-10:25",
        title: "Performance",
        venue: "KLF 2025",
        description:
          "Opening Bharatnatyam performance by Aishwarya Attri & Nandana Moulick",
      },
      {
        time: "10:25-10:30",
        title: "Ceremonial",
        venue: "KLF 2025",
        description:
          "Lighting the Lamp by Hon’ble LG Sri Manoj Sinha Ji",
      },
      {
        time: "10:30-11:05",
        title: "Conversation",
        venue: "KLF 2025",
        description:
          "Manthan in Srinagar. In Chair- Hon’ble LG Sri Manoj Sinha | Moderated by- Sri Kanchan Gupta & Ms Rami Desai",
      },
      {
        time: "11:05-11:15",
        title: "Book Launch & discussion",
        venue: "KLF 2025",
        description:
          "Book launch & discussion- Soldiering with passion+Strategic reflections + Leading from front In chair- Lt Gen DP Pandey, Col Ajay Raina. Moderated by- Amber Zaidi",
      },
      {
        time: "11:15-11:55",
        title: "Book Launch & discussion",
        venue: "KLF 2025",
        description:
          "Soldiering with Passion+ Startegic Reflections+Leading from Front | Participants: Lt Gen DPP, Col AJ | Moderator: Amber Zaidi | Remarks: Reserve: Raja Muneeb",
      },
      {
        time: "12:00-12:15",
        title: "Book Launches",
        venue: "KLF 2025",
        description:
          "3 selected authors | Participants: , , Vijay Dhar | Remarks: Authors to speak for 3 minutes each; will bring five gift wrapped books. Before this event, such authors wd hv given a 10 min video talk in front of another camera",
      },
      {
        time: "12:20-13:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Flashpoint Kashmir: Is World's Obsession with Kashmir a positive? | Participants: Abhijeet Mitra, Rami Desai | Moderator: Raja Muneeb",
      },
      {
        time: "13:05-13:15",
        title: "Performance",
        venue: "KLF 2025",
        description: "Rouf Dance | Participants: Aspire school",
      },
      {
        time: "13:20-14:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Ecology: Where did we go wrong? | Participants: Shiv Kunal, Guru Moksha | Moderator: Rouble Nagi",
      },
      {
        time: "14:00-14:15",
        title: "Book Launch",
        venue: "KLF 2025",
        description: "3 selected authors | Participants: , , Prof Andrabi",
      },
      {
        time: "14:20-15:00",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Great Game & China | Participants: Col Sodhi, Arindam Mukherjee | Moderator: Raavya Sarda",
      },
      {
        time: "15:05-15:15",
        title: "Performance",
        venue: "KLF 2025",
        description: "NIFT Students | Participants: NIFT, NIFT, NIFT",
      },
      {
        time: "15:20-16:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "The shine of Feminine | Participants: Aarti Tikoo, Monika Gupta, Tehmeena Rizvi | Moderator: Damini Punia",
      },
      {
        time: "16:05-16:15",
        title: "Performance",
        venue: "KLF 2025",
        description: "Dogri Dance | Participants: Various artists",
      },
      {
        time: "16:20-17:00",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Distorians/Kunan/Kashmir Insurgency | Participants: Utpal Kumar, Haroon Imtiyaaz, Col Yoginder | Moderator: Col AJ",
      },
      {
        time: "17:05",
        title: "Performance",
        venue: "KLF 2025",
        description: "Noor Mohammad & Band | Participants: Various artists",
      },
      // ... baaki events
    ],
  },
  {
    day: "Sunday, 12th October 2025",
    events: [
      {
        time: "10:00-10:05",
        title: "Movie",
        venue: "KLF 2025",
        description: "KLF 2024 | Moderator: TBN",
      },
      {
        time: "10:05-10:20",
        title: "Performance",
        venue: "KLF 2025",
        description: "Instrumental | Participants: ?",
      },
      {
        time: "10:25-11:05",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Mukhbir+Gutless+Lalitaditya | Participants: Brig Sushil, Jash Dholani, Prashant | Moderator: Raavya",
      },
      {
        time: "11:10-11:50",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Op Sindoor | Participants: Lt Gen DPP, Ravinder Robin, Col Sodhi | Moderator: Jayesh Gangan",
      },
      {
        time: "11:55-12:05",
        title: "Performance",
        venue: "KLF 2025",
        description: "Gojri Dance | Participants: Various artists",
      },
      {
        time: "12:10-13:00",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Maj Shaitan+Aurangzeb | Participants: Jai Samota, Damini, Col AJ | Moderator: Amber Zaidi",
      },
      {
        time: "13:05-13:15",
        title: "Book Launch",
        venue: "KLF 2025",
        description: "3 selected authors | Participants: , ",
      },
      {
        time: "13:20-14:00",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Asian Century | Participants: Chandachur Ghose, Abhijeet Mitra, Rami Desai | Moderator: Raja Muneeb | Remarks: Ghose's book launch",
      },
      {
        time: "14:05-14:25",
        title: "Performance",
        venue: "KLF 2025",
        description: "Play | Participants: DPS Srinagar",
      },
      {
        time: "14:30-15:10",
        title: "Book Session",
        venue: "KLF 2025",
        description:
          "Mountain Godesses+?? | Participants: Manu Khajuria, Tehmeena Rizvi, Gurunatha | Moderator: Naira Manzoor",
      },
      {
        time: "15:15-15:25",
        title: "Book Launch",
        venue: "KLF 2025",
        description: "3 selected authors | Participants: , , Neerja Mattoo",
      },
      {
        time: "15:30-16:10",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "Education | Participants: Khurshid Iqbal, Vijay Dhar, Neerja Mattoo | Moderator: Emaad Makhdoomi",
      },
      {
        time: "16:10-16:40",
        title: "Discussion",
        venue: "KLF 2025",
        description:
          "What is in store for Kashmir | Participants: Amitava Chatterjee, Kanchan Gupta, Lt Gen DPP/Atal Dulloo",
      },
      {
        time: "16:40-17:20",
        title:
          "Ceremonial & Discussion | Felicitations (felicitate the director or singer)",
        venue: "KLF 2025",
        description:
          "Welcome to Dr Karan Singh | India at 2037 | Moderator: Usha Pandey & Ravinder Robin",
      },
      {
        time: "17:20-17:50",
        title: "Performance",
        venue: "KLF 2025",
        description: "Songs of Paradise | Participants: Masrat un Nissa",
      },
      {
        time: "17:50-18:00",
        title: "Ceremonial",
        venue: "KLF 2025",
        description: "Vote of Thanks | Participants: Usha Pandey",
      },
      {
        time: "18:00",
        title: "Vande Mataram",
        venue: "KLF 2025",
        description: "School Kids",
      },
      // ... baaki events
    ],
  },
];

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
          <h1 className="text-5xl md:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-center drop-shadow-lg">
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
              className="w-full flex justify-between items-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 px-6 py-4 text-left text-white font-bold text-xl"
              data-aos="fade-right"
            >
              {dayItem.day}
              <span className="ml-4 text-lg">{openDay === idx ? "▲" : "▼"}</span>
            </button>

            {/* Collapse Body */}
            {openDay === idx && (
              <div
                className="bg-white p-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="relative border-l-2 border-purple-300 pl-2">
                  {dayItem.events.map((event, i) => (
                    <div
                      key={i}
                      className="mb-8 relative bg-white/95 p-6 rounded-xl border border-[#E1E1E1]"
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-4 w-4 h-4 bg-purple-700 rounded-full border-2 border-white top-1/2 -translate-y-1/2"></span>

                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-purple-700">
                          {event.title}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-pink-500 via-purple-500 to-red-500">
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