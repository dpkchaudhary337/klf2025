import { useNavigate } from "react-router-dom";

export const AboutKLF = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/aboutklf25");
  };

  return (
    <div className="bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] relative">
      <div className="px-6 sm:px-10 py-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Section */}
        <div
          className="md:w-[85%] text-center md:text-left relative z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-400 to-red-500 
                       bg-clip-text text-transparent mb-6 tracking-wide relative inline-block"
            data-aos="fade-down"
          >
            About KLF 2025
            <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-gradient-to-r from-orange-400 via-pink-400 to-red-500 rounded-full"></span>
          </h2>

          {/* Description */}
          <div
            className="space-y-5 text-white/90 leading-relaxed sm:text-lg text-justify"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p>
              Set beneath the <span className="font-semibold">Zabarwan peaks</span> and along the waters of Dal, the Kashmir Literature Festival returns - sharper in vision, deeper in purpose.
            </p>
            <p data-aos="fade-left" data-aos-delay="300">
              More than a literary event, KLF is a civilizational statement: a confluence of ideas, identity, and inspiration. It is where events become stories, and culture becomes the driving force.
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              From its remarkable debut in 2024, KLF now strides forward, to awaken young minds & reclaim Kashmir's intellectual legacy.
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
              KLF 2025 aims to host the most valuable churn in Srinagar for the global community.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="mt-10 px-10 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white font-semibold 
                       rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 
                       hover:from-white hover:via-white hover:to-white hover:text-black 
                       transition-all duration-300"
            onClick={handleClick}
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};
