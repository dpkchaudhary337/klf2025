import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function VerifyTicket() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("booking_id");

  const [bookingDetails, setBookingDetails] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookingId) {
      setError("Invalid QR Code – No Booking ID found.");
      return;
    }

    fetch(`${API_BASE_URL}get_booking.php?booking_id=${bookingId}`)
      .then(async (res) => {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (data.status === "success") {
            setBookingDetails(data.booking);
            setAttendees(data.attendees || []);
          } else {
            setError("Booking not found or invalid ticket.");
          }
        } catch (err) {
          console.error("Parse Error:", err, text);
          setError("Invalid server response.");
        }
      })
      .catch(() => setError("Network error while verifying ticket."));
  }, [bookingId]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="bg-white shadow-xl p-6 rounded-xl text-center">
          <h1 className="text-2xl font-bold text-red-600">❌ Invalid Ticket</h1>
          <p className="mt-2 text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!bookingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Verifying your ticket...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl p-8 rounded-2xl text-center max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-green-700">✅ Ticket Verified!</h1>
        <p className="text-gray-700 mt-3">This ticket is valid.</p>

        {/* Event Info */}
        <div className="mt-6 text-center pb-4">
          <p className="text-lg text-gray-800 font-semibold">
            Thank you for booking your ticket to
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            Kashmir Literature Festival 2025
          </h2>
          <p className="text-md text-gray-600 mt-1">
            11th & 12th October <br />
            Dal Lake Front, SKICC, Srinagar
          </p>
        </div>

        {/* Booking Details */}
        <div className="mt-6 text-left border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Your Booking Details:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Booking ID:</span> {bookingDetails.booking_id}</li>
            <li><span className="font-medium">Name:</span> {bookingDetails.name}</li>
            <li><span className="font-medium">Email:</span> {bookingDetails.email}</li>
            <li><span className="font-medium">Package:</span> {bookingDetails.package_type}</li>
            {bookingDetails.created_at && (
              <li><span className="font-medium">Booking Time:</span> {bookingDetails.created_at}</li>
            )}
            <li><span className="font-medium">Amount Paid:</span> ₹{bookingDetails.amount}</li>
          </ul>
        </div>

        {/* Attendee Details */}
        {attendees.length > 0 && (
          <div className="mt-6 text-left border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Attendee Details:
            </h3>
            <ul className="space-y-2 text-gray-700">
              {attendees.map((att, index) => (
                <li key={index}>
                    👤 {att.name} ({att.email || "N/A"})
                  </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
