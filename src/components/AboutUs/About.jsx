import React, { useEffect } from "react";
import { VolunteersPreview2025 } from "../Volunteers/VolunteersPreview2025";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <div className="relative min-h-screen py-16 px-6 lg:px-20 bg-gradient-to-b from-amber-50 via-white to-amber-50">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 leading-tight">
            About Kashmir Literature Festival
          </h1>
          <p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Celebrating literature, culture & knowledge at the heart of Srinagar
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <p data-aos="fade-up" data-aos-delay="200">
            <span className="font-semibold text-amber-900">
              Kashmir Literature Festival
            </span>
            is a flagship initiative under Srikula Foundation aiming to build a
            world-class platform in Srinagar for everyone engaged in learning &
            sharing knowledge.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            The maiden edition was organised in{" "}
            <span className="font-semibold">December 2024</span>. It was a
            two-day festival attended by diverse participants enjoying sessions
            from authors, thinkers, artists & leaders.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            Kashmir Literature Festival creates a platform to discuss fresh
            ideas, literature, culture & diverse philosophies.
          </p>

          <p data-aos="fade-up" data-aos-delay="500">
            <span className="font-semibold text-amber-900">
              Srikula Foundation
            </span>{" "}
            believes in empowerment through knowledge. The festival encourages a
            healthy reading & writing community.
          </p>

          <p data-aos="fade-up" data-aos-delay="600">
            Kashmir Literature Festival aims to establish Srinagar as a
            knowledge hub & Kashmir as{" "}
            <span className="italic text-amber-700">
              “The powerhouse of wisdom”
            </span>
            .
          </p>

          <p data-aos="fade-up" data-aos-delay="700">
            KLF 2025 will feature over{" "}
            <span className="font-semibold">30 book launches</span>,{" "}
            <span className="font-semibold">50+ sessions</span>, keynote
            addresses, cultural performances & open mic events.
          </p>

          <p data-aos="fade-up" data-aos-delay="800">
            Led by passionate youth of Jammu & Kashmir,{" "}
            <span className="font-semibold text-amber-900">KLF 2025</span>{" "}
            offers interdisciplinary discussions and memorable experiences.
          </p>
        </div>

        {/* Highlight Quote */}
        <div
          className="mt-16 text-center"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <blockquote className="text-xl md:text-2xl font-semibold text-amber-800 italic border-l-4 border-amber-600 pl-6 md:pl-8">
            “Knowledge is empowerment, and Kashmir is its powerhouse.”
          </blockquote>
        </div>
      </div>
      <div className="">
        <VolunteersPreview2025 />
      </div>
    </>
  );
}
