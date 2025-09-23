import React from "react";

export const Partnership = () => {
  return (
    <div className="w-full flex font-inter justify-center">
      <div className="lg:w-[80%] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-8 py-16">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">
            Co-Branding & Partnerships
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Join us in creating impactful collaborations! By partnering with us,
            you can expand your reach, enhance brand recognition, and develop
            unique, co-branded experiences. Let’s combine our strengths to
            deliver exceptional value and innovation for our shared audience.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Why Partner with Us?
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <strong>Mutual Growth:</strong> Access a wider audience through
              joint efforts.
            </li>
            <li>
              <strong>Enhanced Visibility:</strong> Strengthen brand recognition
              with co-branding.
            </li>
            <li>
              <strong>Collaborative Innovation:</strong> Create unique, engaging
              offerings together.
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Let’s Connect! Reach out to explore a powerful partnership with us.
          </p>
          <p className="mt-4 text-gray-900 font-medium">
            Please write to us at:{" "}
            <a
              href="mailto:contact@srikula.org"
              className="text-blue-600 hover:underline"
            >
              contact@srikula.org
            </a>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg h-[90vh]"
          />
        </div>
      </div>
    </div>
  );
};
