import display from "../../assets/display.mp4";

export const DisplayPage = () => {
  return (
    <div className="relative w-full h-[65vh] md:h-[75vh] lg:h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={display} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-widest drop-shadow-xl"
        >
          KASHMIR
          <br />
          <span className="text-[#f8d36e]">LITERATURE</span>
          <br />
          FESTIVAL 2025
        </h1>

        {/* Date & Venue */}
        <div className="mt-6 text-center space-y-2">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide"
          >
            11<sup>th</sup> & 12<sup>th</sup> OCTOBER
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light"
          >
            Dal Lake Front, <span className="font-medium">SKICC, Srinagar</span>
          </p>
        </div>
      </div>

      {/* Bottom Black Strap with Marquee */}
      <div
        className="absolute bottom-0 w-full bg-black py-2 overflow-hidden"
        data-aos="fade-left"
        data-aos-delay="700"
      >
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm md:text-base text-white font-medium">
          📢 “KLF 2025 registrations are now live! Click ‘Book Now’ to grab your festival pass. Follow our Socials @kashmirlitfest”{" "}
          <span className="font-semibold text-[#f8d36e]">KLF 2025</span>{" "}
          • For Brand partnerships & inquiries:{" "}
          <span className="font-semibold text-[#f8d36e]">
            contact@kashmirliteraturefestival.com
          </span>
        </div>
      </div>
    </div>
  );
};
