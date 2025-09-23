import React from "react";
import { useParams, Link } from "react-router-dom";
import speakers2024 from "../../speakers2024";
import speakers2025 from "../../speakers2025";

const SpeakerDetail = () => {
  const { id } = useParams();
  const speakerId = parseInt(id, 10);

  // Dono lists check karo alag se
  const speaker2024 = speakers2024.find((s) => s.id === speakerId);
  const speaker2025 = speakers2025.find((s) => s.id === speakerId);

  const speaker = speaker2024 || speaker2025;

  if (!speaker) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Speaker Not Found</h2>
        <Link to="/archive" className="text-blue-600 mt-4 block">
          Back to Speakers
        </Link>
      </div>
    );
  }

  // Agar 2024 wala mila to 2024 ka url, otherwise 2025
  const backLink = speaker2024 ? "/speakers/2024" : "/speakers/2025";

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-64 h-64 object-cover rounded-xl shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{speaker.name}</h1>
          <p className="text-lg text-gray-600">{speaker.role}</p>
          {speaker.topic && (
            <p className="mt-3 text-gray-700 italic">{speaker.topic}</p>
          )}

          <p className="mt-4 text-gray-700">
            The Kashmir Literature Festival brings together inspiring voices for
            rich conversations on culture, heritage, and society.
          </p>

          <Link
            to={backLink}
            className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            ← Back to Speakers List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetail;
