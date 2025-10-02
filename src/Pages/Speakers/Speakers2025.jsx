import { Link } from "react-router-dom";
import speakers from "../../speakers2025";

const Speakers2025 = () => {
  // Filter speakers
  const chiefGuests = speakers.filter((s) => s.topic === "CHIEF GUEST");
  const otherSpeakers = speakers
    .filter((s) => s.topic !== "CHIEF GUEST");

  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Main Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
          Attending Speakers KLF 2025
        </h2>
      </div>

      {/* Chief Guests Section */}
      {chiefGuests.length > 0 && (
        <div className="max-w-3xl mx-auto mb-16">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                  <p className="text-sm text-gray-700 mt-2">{speaker.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Other Speakers Grid */}
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
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
      </div>

      {/* View All Button */}
      <div
        className="text-center mt-10"
        data-aos="fade-up"
        data-aos-delay={1200}
      >
        
      </div>
    </div>
  );
};

export default Speakers2025;
