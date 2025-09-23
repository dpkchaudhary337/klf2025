import yajna from "../../assets/kashmirLitFest/yajna.png";
import platform from "../../assets/kashmirLitFest/platform.png";
import initiative from "../../assets/kashmirLitFest/initiative.png";
import source from "../../assets/kashmirLitFest/source.png";
import effort from "../../assets/kashmirLitFest/effort.png";
import leafs from "../../assets/klfCalender/claenderLeafs.png";

const data = [
  {
    title: "A yajna",
    description:
      "KLF is a yajna to invoke Ma Sharada & seek her guidance to the path of knowledge",
    image: yajna,
  },
  {
    title: "A platform",
    description: "KLF is a platform which thinks, educates & creates",
    image: platform,
  },
  {
    title: "An initiative",
    description:
      "KLF is an initiative to allow inter-mixing of ideas, culture, literature, common inheritance & diverse philosophies",
    image: initiative,
  },
  {
    title: "A source",
    description:
      "KLF is a source of empowerment to many who seek to benefit from the wealth of knowledge we aim to generate",
    image: source,
  },
  {
    title: "An effort",
    description:
      "KLF is an effort to put Kashmir back on the global map as 'The powerhouse of wisdom'",
    image: effort,
  },
];

export const KashmirLitFest = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50 via-white to-orange-100 py-12 px-6 flex flex-col items-center">
      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <img src={leafs} alt="leaf" className="-rotate-45 h-12 md:h-16" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#CB5513] mx-4">
          Kashmir LitFest
        </h1>
        <img src={leafs} alt="leaf" className="h-12 md:h-16" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 p-2"
          >
            <div className="w-full flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold text-[#CB5513] mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};