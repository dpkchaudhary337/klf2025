import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// ✅ Base URL from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("🌐 API_BASE_URL:", API_BASE_URL);

export default function PaymentSuccess() {
  const location = useLocation();
  const bookingId = location.state?.bookingId || null;
  const [bookingDetails, setBookingDetails] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (bookingId) {
      fetch(`${API_BASE_URL}/get_booking.php?booking_id=${bookingId}`)
        .then(async (res) => {
          const text = await res.text();
          console.log("📥 Raw Response:", text);

          try {
            const data = JSON.parse(text);
            console.log("✅ Parsed JSON:", data);

            if (data.status === "success") {
              setBookingDetails(data.booking);
              setAttendees(data.attendees || []);
            } else {
              setError("Booking not found or invalid response.");
            }
          } catch (err) {
            console.error("❌ JSON Parse Error:", err);
            setError("Server returned invalid JSON. Check API.");
          }
        })
        .catch((err) => {
          console.error("⚠️ Fetch Error:", err);
          setError("Failed to fetch booking details.");
        });
    }
  }, [bookingId]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <p className="text-lg text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  if (!bookingDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading your booking details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🎉 Payment Successful!
        </h1>

        <p className="text-xl text-gray-700 font-semibold">
          Thank you for booking your ticket to
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          Kashmir Literature Festival 2025
        </h2>
        <p className="text-md text-gray-600 mt-1">
          11th & 12th October <br />
          Dal Lake Front, SKICC, Srinagar
        </p>

        {/* Booking Details */}
        <div className="mt-6 text-left border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Your Booking Details:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Booking ID:</span>{" "}
              {bookingDetails.booking_id}
            </li>
            <li>
              <span className="font-medium">Name:</span> {bookingDetails.name}
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              {bookingDetails.email}
            </li>
            <li>
              <span className="font-medium">Package:</span>{" "}
              {bookingDetails.package_type}
            </li>
            <li>
              <span className="font-medium">Amount Paid:</span> ₹
              {bookingDetails.amount}
            </li>
          </ul>
        </div>

        {/* Attendees List */}
        {attendees.length > 0 && (
          <div className="mt-6 text-left border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Ticket Holders:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {attendees.map((attendee, index) => (
                <li
                  key={index}
                  className="p-3 border rounded-lg bg-gray-50 shadow-sm"
                >
                  <span className="font-medium">#{index + 1}</span> -{" "}
                  {attendee.name}
                  {attendee.email ? ` (${attendee.email})` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-green-700 font-semibold">
          📩 A confirmation mail has been sent to your registered email.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
