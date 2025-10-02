import { Link } from "react-router-dom";
import speakers from "../../speakers2025";

const SpeakersPreview2025 = () => {
  // Filter speakers
  const chiefGuests = speakers.filter((s) => s.topic === "CHIEF GUEST");
  const otherSpeakers = speakers
    .filter((s) => s.topic !== "CHIEF GUEST")
    .slice(0, 12);

  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
          Attending Speakers KLF 2025
        </h2>
      </div>

      {/* Chief Guests Section */}
      {chiefGuests.length > 0 && (
        <div className="max-w-3xl mx-auto mb-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {chiefGuests.map((speaker, index) => (
            <Link
              to={`/speaker/${speaker.id}`}
              key={speaker.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden block transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-0 left-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-br-2xl">
                  {speaker.topic}
                </span>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {speaker.name}
                </h3>
                {/* 👆 pehle text-xl tha, ab thoda chhota */}
                <p className="text-sm text-gray-700 mt-2">{speaker.role}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Other Speakers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {otherSpeakers.map((speaker, index) => (
          <Link
            to={`/speaker/${speaker.id}`}
            key={speaker.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl block"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative mt-4">
              {speaker.topic && (
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-tr-lg rounded-br-lg">
                  {speaker.topic}
                </span>
              )}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-40 object-cover rounded-tr-2xl rounded-br-2xl"
              />
            </div>
            <div className="p-3 text-center">
              <h4 className="text-sm font-semibold text-gray-900">
                {speaker.name}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{speaker.role}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div
        className="text-center mt-10"
        data-aos="fade-up"
        data-aos-delay={1200}
      >
        <Link
          to="/speakers/2025"
          className="px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white rounded-lg shadow hover:bg-[#b8551f] transition"
        >
          View All Speakers
        </Link>
      </div>
    </div>
  );
};

export default SpeakersPreview2025;
