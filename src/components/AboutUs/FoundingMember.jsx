import visionImage from "../../assets/aboutUs/aboutUs.png";
import madav from "../../assets/madav.png";
import yovraj from "../../assets/youvraj.png";

export function FoundingMember() {
  return (
    <div className="py-16 px-6 lg:px-20 bg-gradient-to-r from-[#fdf6f0] to-[#fff]">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-16">
        Srikula Founding Members
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
        {/* Member 1 */}
        <div className="flex flex-col items-center text-center bg-white border border-white rounded-lg shadow-xl p-6 w-72 lg:w-80 xl:w-96 transition-transform duration-300 hover:scale-105">
          <img
            src={yovraj}
            alt="Yuvraj Srivastava"
            className="w-40 h-40 lg:w-44 lg:h-44 object-cover rounded-lg border-2 border-white shadow-md"
          />
          <h2 className="text-xl lg:text-2xl font-bold mt-4 text-gray-800">
            Yuvraj Srivastava
          </h2>
          <p className="font-semibold text-gray-600">(Chairman)</p>
          
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center text-center bg-white border border-white rounded-lg shadow-xl p-6 w-72 lg:w-80 xl:w-96 transition-transform duration-300 hover:scale-105">
          <img
            src={madav}
            alt="Madhav Kumar Surya"
            className="w-40 h-40 lg:w-44 lg:h-44 object-cover rounded-lg border-2 border-white shadow-md"
          />
          <h2 className="text-xl lg:text-2xl font-bold mt-4 text-gray-800">
            Madhav Kumar Surya
          </h2>
          <p className="font-semibold text-gray-600">(General Secretary)</p>
          
        </div>
      </div>
    </div>
  );
}
