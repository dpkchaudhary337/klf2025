import { Link } from "react-router-dom";
import Aditya_Raj from "../../assets/volunteers/2025/Aditya_Raj.jpeg";
import Aiman_Akhtar from "../../assets/volunteers/2025/Aiman_Akhtar.jpeg";
import Alok_Rao from "../../assets/volunteers/2025/Alok_Rao.jpeg";
import Anshika_Bartwal from "../../assets/volunteers/2025/Anshika_Bartwal.jpeg";
import Anusha_Imran from "../../assets/volunteers/2025/Anusha_Imran.jpeg";
import Archana_Kumari from "../../assets/volunteers/2025/Archana_Kumari.jpeg";
import Arundathy_S from "../../assets/volunteers/2025/Arundathy_S.jpeg";
import Batul_Kapashi from "../../assets/volunteers/2025/Batul_Kapashi.jpeg";
import Bhavna from "../../assets/volunteers/2025/Bhavna.jpeg";
import Bhumi_Kapoor from "../../assets/volunteers/2025/Bhumi_Kapoor.jpeg";
import Diya_Agarwal from "../../assets/volunteers/2025/Diya_Agarwal.jpeg";
import Hiba_Naseer_tv from "../../assets/volunteers/2025/Hiba_Naseer_tv.jpeg";
import Khushboo_Garg from "../../assets/volunteers/2025/Khushboo_Garg.jpeg";
import Md_Nasir_Hussain from "../../assets/volunteers/2025/Md._Nasir_Hussain.jpeg";
import Megsha_Arora from "../../assets/volunteers/2025/Megsha_Arora.jpeg";
import Nupur_Chandra from "../../assets/volunteers/2025/Nupur_Chandra.jpeg";
import Padma_Angmo from "../../assets/volunteers/2025/Padma_Angmo.jpeg";
import Pooja_Behera from "../../assets/volunteers/2025/Pooja_Behera.jpeg";
import Pranjal_Jain from "../../assets/volunteers/2025/Pranjal_Jain.jpeg";
import Raza_Javed from "../../assets/volunteers/2025/Raza_Javed.jpeg";
import Ritu from "../../assets/volunteers/2025/Ritu.jpeg";
import Sachin_Kumar from "../../assets/volunteers/2025/Sachin_Kumar.jpeg";
import Sagrika from "../../assets/volunteers/2025/Sagrika.jpeg";
import Shaik_Saniya_Beebi from "../../assets/volunteers/2025/Shaik_Saniya_Beebi.jpeg";
import Shalini_Verma from "../../assets/volunteers/2025/Shalini_Verma.jpeg";
import Siddhi from "../../assets/volunteers/2025/Siddhi.jpeg";
import Sneha_Kumari from "../../assets/volunteers/2025/Sneha_Kumari.jpeg";
import Sujal_Singh from "../../assets/volunteers/2025/Sujal_Singh.jpeg";
import Tushar_Kumar from "../../assets/volunteers/2025/Tushar_Kumar.jpeg";
import Vaibhavi_Shende from "../../assets/volunteers/2025/Vaibhavi_Shende.jpeg";


const volunteers = [
  { name: "Aditya Raj", logo: Aditya_Raj },
  { name: "Aiman Akhtar", logo: Aiman_Akhtar },
  { name: "Alok Rao", logo: Alok_Rao },
  { name: "Anshika Bartwal", logo: Anshika_Bartwal },
  { name: "Anusha Imran", logo: Anusha_Imran },
  { name: "Archana Kumari", logo: Archana_Kumari },
  { name: "Arundathy S", logo: Arundathy_S },
  { name: "Batul Kapashi", logo: Batul_Kapashi },
  { name: "Bhavna", logo: Bhavna },
  { name: "Bhumi Kapoor", logo: Bhumi_Kapoor },
  { name: "Diya Agarwal", logo: Diya_Agarwal },
  { name: "Hiba Naseer Tv", logo: Hiba_Naseer_tv },
  { name: "Khushboo Garg", logo: Khushboo_Garg },
  { name: "Md. Nasir Hussain", logo: Md_Nasir_Hussain },
  { name: "Megsha Arora", logo: Megsha_Arora },
  { name: "Nupur Chandra", logo: Nupur_Chandra },
  { name: "Padma Angmo", logo: Padma_Angmo },
  { name: "Pooja Behera", logo: Pooja_Behera },
  { name: "Pranjal Jain", logo: Pranjal_Jain },
  { name: "Raza Javed", logo: Raza_Javed },
  { name: "Ritu", logo: Ritu },
  { name: "Sachin Kumar", logo: Sachin_Kumar },
  { name: "Sagrika", logo: Sagrika },
  { name: "Shaik Saniya Beebi", logo: Shaik_Saniya_Beebi },
  { name: "Shalini Verma", logo: Shalini_Verma },
  { name: "Siddhi", logo: Siddhi },
  { name: "Sneha Kumari", logo: Sneha_Kumari },
  { name: "Sujal Singh", logo: Sujal_Singh },
  { name: "Tushar Kumar", logo: Tushar_Kumar },
  { name: "Vaibhavi Shende", logo: Vaibhavi_Shende },
];

export const VolunteersPreview2025 = () => {
  return (
    <div className="py-20 bg-white/80">
      {/* Heading */}
      <h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        data-aos="fade-down"
      >
        Volunteers KLF 2025
      </h2>

      {/* Volunteers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {volunteers.map((volunteer, index) => (
          <a
            key={index}
            href={volunteer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger effect
          >
            {/* Image Wrapper with fixed height */}
            <div className="h-40 w-40 overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src={volunteer.logo}
                alt={volunteer.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Name */}
            <p className="mt-3 text-center text-sm font-medium text-gray-700 group-hover:text-[#BA451C] transition">
              {volunteer.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
