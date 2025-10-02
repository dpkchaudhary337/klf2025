import { Link } from "react-router-dom";
import academy from "../../assets/partners/2025/academy.png";
import nift from "../../assets/partners/2025/nift.jpeg";
import aggregate from "../../assets/partners/2025/aggregate.png";
import sabere from "../../assets/partners/2025/SabreandQuill.png";

const partners = [
  { name: "J&K Academy of Art, Culture & language", logo: academy, link: "http://jkaacl.jk.gov.in/Main/Default.aspx" },
  { name: "National Institute of Fashion Technology", logo: nift, link: "#" },
  { name: "Aggregate", logo: aggregate, link: "#" },
  { name: "Sabere and Quill Publisher", logo: sabere, link: "https://www.sabreandquill.com/" },
];

export const PartnersPreview2025 = () => {
  return (
    <div className="py-20 bg-white/80">
      {/* Heading */}
      <h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        data-aos="fade-down"
      >
        Partners KLF 2025
      </h2>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger effect
          >
            <div className="h-20 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-gray-700 group-hover:text-[#BA451C] transition">
              {partner.name}
            </p>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div
        className="text-center mt-10"
        data-aos="fade-up"
        data-aos-delay={1200}
      >
        <Link
          to="/partners/2025"
          className="px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white rounded-lg shadow hover:bg-[#b8551f] transition"
        >
          View All Partners
        </Link>
      </div>
    </div>
  );
};
