import { useNavigate } from "react-router-dom";

export const AboutKLF = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/klf2025");
  };

  return (
    <div className="bg-[#0d0d0d]">
      <div className="px-6 sm:px-10 py-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Section */}
        <div className="md:w-[85%] text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8d36e] mb-6 tracking-wide">
            About KLF 2025
          </h2>

          <div className="space-y-5 text-white/90 leading-relaxed sm:text-lg">
            <p>
              Set beneath the <span className="font-semibold">Zabarwan peaks</span> and along the waters of Dal, the Kashmir Literature Festival returns — 
              sharper in vision, deeper in purpose.
            </p>
            <p>
              More than a literary event, KLF is a <span className="font-semibold">civilizational statement</span>: 
              a confluence of ideas, identity, and inspiration.  
              It is where events become stories, and culture becomes the driving force.
            </p>
            <p>
              From its remarkable debut in <span className="font-semibold">2024</span>, KLF now strides forward — 
              to awaken young minds & reclaim Kashmir&apos;s intellectual legacy.
            </p>
            <p>
              KLF 2025 aims to host the most valuable churn in Srinagar for the global community.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-[#BA451C] to-[#892b0f] text-white font-semibold 
                       rounded-full shadow-xl hover:scale-105 hover:from-[#fff] hover:to-[#fff] hover:text-black 
                       transition-all duration-300"
            onClick={handleClick}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
