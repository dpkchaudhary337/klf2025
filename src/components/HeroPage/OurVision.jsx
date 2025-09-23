import visionImage from "../assets/visionImg.png";

export const OurVision = () => {
  return (
    <div className="w-full flex font-inter justify-center">
      <div className="lg:w-[80%] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-8 py-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg h-[90vh]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">OUR VISION</h2>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            CREATING STRENGTH
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The world respects you when you respect yourself. The indigenous
            rich culture of Bharat has suffered grave humiliation in the past
            few centuries. Our dharma was mocked, our Gurukuls were forced to
            shut, our people were stripped from their possessions and many from
            their source of livelihood. In fact, many new studies are still
            being done to acknowledge the quantum of damage done to Bharat by
            medieval & modern colonialists.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            An inherent brilliance of its people & the blessings from the gods
            has made Bharat a competent player on the global stage in recent
            years. Our samskaras, aspirations and consistent focus on education
            has helped Bharat achieve new milestones in fields like SpaceTech,
            IT, services, trade, sports, innovation and many others.
          </p>
          <button className="mt-6 px-8 py-2 bg-[#BA451C] text-white rounded-full shadow-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
        </div>
      </div>
    </div>
  );
};
