import React, { useEffect } from "react";
import visionImage from "../../assets/aboutUs/aboutUs.png";

export function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen py-16 px-6 lg:px-20 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50">
      {/* Section Title */}
      <h1 className="text-center text-3xl lg:text-5xl font-extrabold text-gray-800 mb-12">
        OUR VISION ✨
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <h2 className="text-2xl lg:text-4xl font-bold text-orange-500">
            CREATING <span className="text-yellow-600">STRENGTH</span> 💪
          </h2>
          <h3 className="text-lg lg:text-2xl font-semibold text-gray-800">
            The world respects you when you <span className="font-bold text-orange-500">respect yourself</span> 🌏
          </h3>

          <p className="leading-relaxed text-gray-700">
            The indigenous rich culture of <span className="font-bold text-yellow-600">Bharat 🇮🇳</span> has suffered <span className="font-bold text-red-500">grave humiliation</span> in the past few centuries. Our <span className="font-bold text-orange-500">dharma</span> was mocked, our Gurukuls were forced to shut, and our people were stripped of their <span className="font-bold">possessions and livelihood</span>. Many new studies still acknowledge the quantum of damage done by colonialists.
          </p>

          <p className="leading-relaxed text-gray-700">
            Despite this, Bharat's inherent brilliance and blessings have made it a <span className="font-bold text-green-600">global player 🌐</span>. Our focus on <span className="font-bold text-orange-500">education 📚</span> has driven achievements in <span className="font-bold text-blue-500">SpaceTech 🚀, IT 💻, trade, sports ⚽</span>, and more.
          </p>

          <p className="leading-relaxed text-gray-700">
            Bharat's youth holds immense <span className="font-bold text-purple-600">potential ✨</span>, which can only be harnessed through direction and strength. We believe <span className="font-bold">effective decisions</span> are made by individuals strong in <span className="font-bold text-orange-500">body, mind, and spirit 🧘‍♂️</span>.
          </p>

          <p className="leading-relaxed text-gray-700">
            In 2024, <span className="font-bold text-yellow-600">Srikula Foundation</span> is building platforms such as <span className="font-bold text-orange-500">Kashmir LitFest 📖</span> to mix ideas, cultures, and knowledge systems. This initiative aims to take Kashmir to the world and <span className="font-bold text-green-600">empower youth 💡</span> through comprehensive education.
          </p>

          <p className="leading-relaxed text-gray-700">
            Srikula Foundation is also creating <span className="font-bold text-orange-500">modern classrooms 🏫</span>, skill-developing schools, and <span className="font-bold text-purple-600">scholarships 🎓</span>. We are grateful for the support received and committed to our mission 💖.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-xl shadow-2xl object-cover w-full max-w-sm lg:max-w-md transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
