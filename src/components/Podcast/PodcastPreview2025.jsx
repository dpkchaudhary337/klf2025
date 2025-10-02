import TheRaavya from "../../assets/Podcast/2025/TheRaavya.png";

import AwaaraMusafir from "../../assets/Podcast/2025/AwaaraMusafir.png";

const PodcastPreview2025 = () => {
  const cards = [
    {
      imageSrc: TheRaavya,
      title: "The Raavya Sarda Show",
      description: "",
      link: "https://www.youtube.com/@raavyasarda/podcasts",
    },
    {
      imageSrc: AwaaraMusafir,
      title: "Awaara Musafir Show",
      description: "",
      link: "https://www.youtube.com/@AwaaraMusaafir/podcasts",
    },
  ];

  return (
    <div className="relative w-full bg-cover bg-center py-16">
      {/* Overlay color */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="inline-block text-2xl lg:text-3xl px-6 py-3 font-bold rounded-md">
            Podcast Partners KLF 2025
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium">Voices that Inspire</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md overflow-hidden 
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image wrapper with fixed aspect ratio */}
              <div className="relative w-full aspect-[1/1] overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content section */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{card.description}</p>

                {/* Link Button */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
                >
                  🎧 Listen Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPreview2025;
