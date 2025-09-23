import React from "react";
import { Link } from "react-router-dom";
import speakers from "../../speakers2025";

const SpeakersPreview2025 = () => {
  // sirf 12 speakers preview ke liye
  const previewSpeakers = speakers.slice(0, 12);

 return (
     <div className="bg-gray-50 py-16 px-6">
       <div className="text-center mb-12">
         <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
           Expected Speakers KLF 2025
         </h2>
         <p className="mt-3 text-lg text-gray-600">
           Browse through inspiring voices from KLF
         </p>
       </div>
 
       {/* Speakers Grid */}
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
         {previewSpeakers.map((speaker) => (
           <Link
             to={`/speaker/${speaker.id}`}
             key={speaker.id}
             className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl block"
           >
             <div className="relative mt-4"> 
               {/* Badge on top-left */}
               {speaker.topic && (
                 <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-tr-lg rounded-br-lg">
                   {speaker.topic}
                 </span>
               )}
               <img
                 src={speaker.image}
                 alt={speaker.name}
                 className="w-full h-40 object-cover rounded-tr-2xl rounded-br-2xl"
               />
             </div>
             <div className="p-3 text-center">
               <h4 className="text-sm font-semibold text-gray-900">
                 {speaker.name}
               </h4>
               <p className="text-xs text-gray-600 mt-1">{speaker.role}</p>
             </div>
           </Link>
         ))}
       </div>
       {/* View All Button */}
             <div className="text-center mt-10">
               <Link
                 to="/speakers/2025"
                 className="px-6 py-2 bg-[#D86B27] text-white rounded-lg shadow hover:bg-[#b8551f] transition"
               >
                 View All Speakers
               </Link>
             </div>
     </div>
   );
};

export default SpeakersPreview2025;
