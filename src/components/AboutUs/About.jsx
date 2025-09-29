import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen py-16 px-6 lg:px-20 bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Page Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          About Kashmir Literature Festival
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Celebrating literature, culture & knowledge at the heart of Srinagar
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto space-y-10 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-amber-900">Kashmir Literature Festival</span> 
          is a flagship initiative under Srikula Foundation which aims to build a 
          world-class platform in Srinagar for everyone engaged in absorbing & 
          spreading knowledge.
        </p>

        <p>
          The maiden edition of Kashmir LitFest was organised in 
          <span className="font-semibold"> December 2024</span> in Srinagar, UT of JK. 
          This two-day festival was attended by a diverse range of people from the 
          UT of JK and outside who enjoyed listening to their favourite authors, 
          leaders, thinkers, bureaucrats & artists.
        </p>

        <p>
          Kashmir Literature Festival aims to create a platform for discussing fresh 
          ideas, literature, culture, common inheritance & diverse philosophies.
        </p>

        <p>
          <span className="font-semibold text-amber-900">Srikula Foundation</span> 
          believes in empowerment through knowledge. The humble, yet impactful event 
          aims to benefit millions who seek the grind of diverse information and 
          encourage a healthy reading/writing community.
        </p>

        <p>
          Kashmir Literature Festival aims to build Srinagar a knowledge hub & carve 
          Kashmir’s niche in the world as 
          <span className="italic text-amber-700"> “The powerhouse of wisdom”.</span>
        </p>

        <p>
          To make the event inclusive, diverse & effective: Kashmir Literature 
          Festival 2025 packs more than <span className="font-semibold">30 book launches</span>, 
          over <span className="font-semibold">50 sessions</span>, keynote addresses, cultural & 
          musical performances, open mic sessions and a lot more. We strive to 
          achieve our current objectives & are cultivating deeper relationships to 
          build a sustainable process of knowledge generation as well as preservation.
        </p>

        <p>
          Fuelled by committed young individuals of Jammu & Kashmir, 
          <span className="font-semibold text-amber-900"> KLF 2025</span> brings a 
          fresh cocktail of inter-disciplinary discussions, dialogues & experience 
          worth a lifetime.
        </p>
      </div>

      {/* Decorative Highlight */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-amber-100 px-6 py-4 rounded-2xl shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold text-amber-800">
            “Knowledge is empowerment, and Kashmir is its powerhouse.”
          </h2>
        </div>
      </div>
    </div>
  );
}
