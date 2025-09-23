import qrCode from "../../assets/QRcode.png";

export const QRCodeContribution = () => {
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-br from-orange-50 via-[#FFDDCB] to-[#FFBE9A] flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-[#CB5513] text-center mb-4">
        Contribute to Kashmir LitFest
      </h1>
      <p className="text-center text-gray-700 max-w-2xl mb-10">
        Your support helps us celebrate the rich culture, literature, and
        heritage of Kashmir. <br className="hidden sm:block" />
        Every contribution, big or small, brings us closer to making KLF a
        grand success.
      </p>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        {/* Text */}
        <div className="text-center sm:text-left max-w-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            How to Contribute?
          </h2>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>📌 Scan the QR code to donate instantly</li>
            <li>📌 Safe & secure UPI transaction</li>
            <li>📌 Contributions go directly to KLF initiatives</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-[#CB5513] text-white rounded-full shadow-md hover:scale-105 transition duration-300">
            Support KLF
          </button>
        </div>

        {/* QR Code */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
          <img
            src={qrCode}
            alt="QR Code"
            className="w-48 h-48 object-contain"
          />
          <p className="mt-4 text-center text-gray-600 text-sm">
            Scan & Contribute
          </p>
        </div>
      </div>
    </div>
  );
};
