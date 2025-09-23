import aish from "../../assets/performance/2025/aish.png";
import masrat from "../../assets/performance/2025/masrat.png";
import noor from "../../assets/performance/2025/noor.png";
import performanceBg from "../../assets/performance/2024/performanceBg.png";

const Performances2025 = () => {
  // Card data
  const cards = [
    {
      imageSrc: noor,
      title: "NOOR МОНАМMAD",
      description: "Renowned Kashmiri Folk and Sufi Music Maestro.",
    },
    {
      imageSrc: masrat,
      title: "MASRAT-UN-NISA",
      description:
        "Rising Kashmiri singer, featured in the 2025 film Songs of Paradise.",
    },
    {
      imageSrc: aish,
      title: "AISHWARYA ATTRI & NANDANA MOULICK",
      description: "Renowned Bharatnatyam Performers.",
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${performanceBg})` }}
    >
      {/* Overlay color */}
      <div className="absolute inset-0 bg-[#f4eddc]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl px-6 py-3 font-bold rounded-md">
            Cultural Performances & Events KLF 2025
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium">
            Experience the Heart of Culture
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden 
              transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image wrapper with fixed aspect ratio */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content section */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performances2025;
