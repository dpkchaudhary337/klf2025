import performanceBg from "../../assets/performance/2024/performanceBg.png";
import image1 from "../../assets/performance/2024/Aiswarya.png";
import image2 from "../../assets/performance/2024/shashrang.jpeg";
import image3 from "../../assets/performance/2024/nandana.png";

const Performances2024 = () => {
  // Card data
  const cards = [
    {
      imageSrc: image1,
      title: "Aishwarya Attri",
      description: "Bharatanatyam Dancer",
    },
    {
      imageSrc: image2,
      title: "The Shashrang Band",
      description: "Fusion from Kashmir",
    },
    {
      imageSrc: image3,
      title: "Nandana Moulick",
      description: "Bharatanatyam Dancer",
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${performanceBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#f4eddc]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="inline-block text-2xl lg:text-3xl px-6 py-3 font-bold rounded-md">
            KLF 2024 Performances
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium">
            Experience the Heart of Culture
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger effect
              className="relative w-72 h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 text-center">
                <h3 className="text-lg font-semibold text-white drop-shadow-md">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performances2024;
