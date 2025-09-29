import academy from "../../assets/partners/2024/academy.png";
import sangam from "../../assets/partners/2024/sangamTalks.png";
import smart from "../../assets/partners/2024/smart4bharat.png";
import risingKashmir from "../../assets/partners/2024/risingKasmir.png";
import rishi from "../../assets/partners/2024/rishiUniversity.png";
import prachyam from "../../assets/partners/2024/PrachyamTV.png";
import delhiUniversity from "../../assets/partners/2024/DULitFest.png";
import urbanPandit from "../../assets/partners/2024/UrbanPandit.png";
import gulshanBook from "../../assets/partners/2024/gulshanBook.png";
import sabere from "../../assets/partners/2024/SabreandQuill.png";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "J&K Academy of Art, Culture & language",
    logo: academy,
    link: "http://jkaacl.jk.gov.in/Main/Default.aspx",
  },
  {
    name: "Sangam",
    logo: sangam,
    link: "https://sangamtalks.org/",
  },
  {
    name: "Smart4Bharat",
    logo: smart,
    link: "https://smart4bharat.com",
  },
  {
    name: "Rising Kashmir",
    logo: risingKashmir,
    link: "https://risingkashmir.com/",
  },
  {
    name: "Rishi Hood University",
    logo: rishi,
    link: "https://rishihood.edu.in/",
  },
  {
    name: "Prachyam TV",
    logo: prachyam,
    link: "https://prachyam.com/",
  },
  {
    name: "Delhi University Lit. Fest",
    logo: delhiUniversity,
    link: "https://dulitfest.org/",
  },
  {
    name: "The Urban Pandit Show",
    logo: urbanPandit,
    link: "https://youtube.com/@urbanpandits?si=ksw2kFqCyNzfxo-v",
  },
  {
    name: "Gulshan Books Kashmir",
    logo: gulshanBook,
    link: "https://www.instagram.com/gulshan_books_kashmir?igsh=N21hc3o2bTZkcHB4",
  },
  {
    name: "Sabere and Quill Publisher",
    logo: sabere,
    link: "https://www.sabreandquill.com/",
  },
];

export const PartnersPreview2024 = () => {
  return (
    <div className="py-20 bg-white/80">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
         Partners KLF 2024
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300"
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
      <div className="text-center mt-10">
        <Link
          to="/partners/2024"
          className="px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white rounded-lg shadow hover:bg-[#b8551f] transition"
        >
          View All Partners
        </Link>
      </div>
    </div>
  );
};
