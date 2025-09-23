import TheRaavya from "../../assets/Podcast/2025/TheRaavya.png";
import BeingLogical from "../../assets/Podcast/2025/BeingLogical.png";
import AwaaraMusafir from "../../assets/Podcast/2025/AwaaraMusafir.png";



const PodcastPreview2025 = () => {
  // Card data
  const cards = [
    {
      imageSrc: TheRaavya,
      title: "The Raavya Sarda Show",
      description: "",
    },
    {
      imageSrc: BeingLogical,
      title: "Being Logical With Amber",
      description: "",
    },
    {
      imageSrc: AwaaraMusafir,
      title: "Awaara Musafir Show",
      description: "",
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
    >
      {/* Overlay color */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl px-6 py-3 font-bold rounded-md">
            PODCAST PARTNERS KLF 25
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium">
            Voices that Inspire
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
              <div className="relative w-full aspect-[9/9] overflow-hidden">
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

export default PodcastPreview2025;
