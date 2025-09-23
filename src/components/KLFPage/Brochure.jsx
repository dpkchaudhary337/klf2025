import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Brochure = () => {
  const [brochures, setBrochures] = useState([]);
  const [selectedBrochure, setSelectedBrochure] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}get_brochure.php`)
      .then((res) => {
        console.log("Raw API Response:", res.data);
        let data = res.data;

        // Agar string hai to JSON parse karna
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (err) {
            console.error("JSON parse error:", err);
            data = [];
          }
        }

        if (Array.isArray(data)) {
          setBrochures(data);
          if (data.length > 0) setSelectedBrochure(data[0]);
        } else {
          console.error("API did not return array:", data);
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div className="min-h-screen p-5 bg-gradient-to-r from-orange-50 via-[#FFDDCB] to-[#FFBE9A]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Brochures</h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Array.isArray(brochures) && brochures.length > 0 ? (
          brochures.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBrochure(b)}
              className={`px-4 py-2 rounded-lg font-semibold border ${
                selectedBrochure?.id === b.id
                  ? "bg-[#CB5513] text-white border-[#CB5513]"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {b.title}
            </button>
          ))
        ) : (
          <p>No brochures found</p>
        )}
      </div>

      {/* PDF Viewer */}
      {selectedBrochure && (
        <div className="flex flex-col items-center">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(
              selectedBrochure.url
            )}&embedded=true`}
            width="80%"
            height="700px"
            className="shadow-lg rounded-lg mb-4"
            title={selectedBrochure.title}
          ></iframe>

          <a
            href={selectedBrochure.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#CB5513] text-white rounded-lg hover:bg-[#e64f1d] transition"
          >
            Open in New Tab / Download
          </a>
        </div>
      )}
    </div>
  );
};

export default Brochure;
