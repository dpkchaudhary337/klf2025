import academy from "../../assets/partner/academy.png";
import sangam from "../../assets/partner/sangamTalks.png";
import smart from "../../assets/partner/smart4bharat.png";
import risingKashmir from "../../assets/partner/risingKasmir.png";
import rishi from "../../assets/partner/rishiUniversity.png";
import prachyam from "../../assets/partner/PrachyamTV.png";
import delhiUniversity from "../../assets/partner/DULitFest.png";
import urbanPandit from "../../assets/partner/UrbanPandit.png";
import gulshanBook from "../../assets/partner/gulshanBook.png";
import sabere from "../../assets/partner/SabreandQuill.png";
import weddingUniversity from "../../assets/partner/weddingUniversity.png";
import dps from "../../assets/partner/Dps_srinagar.png";

const Partners_2024 = [
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
  {
    name: "Delhi Public School Srinagar",
    logo: dps,
    link: "https://dpssrinagar.com/",
  },
  {
    name: "The Wedding University Events",
    logo: weddingUniversity,
    link: "https://www.instagram.com/the_wedding_university_events?igsh=cDdvbTFjbWF0NzN0",
  },
];

export const Partners2024 = () => {
  return (
    <div className="py-20 bg-[#FFE3DC]">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        KLF 2025 Festival Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {Partners_2024.map((partner, index) => (
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
    </div>
  );
};
