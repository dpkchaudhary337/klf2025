import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingId = location.state?.bookingId || null;

  const [bookingDetails, setBookingDetails] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [error, setError] = useState(null);

  // Fetch booking details
  useEffect(() => {
    if (!bookingId) return;

    fetch(`${API_BASE_URL}get_booking.php?booking_id=${bookingId}`)
      .then(async (res) => {
        const text = await res.text();
        try {
          const data = JSON.parse(text);

          if (data.status === "success") {
            setBookingDetails(data.booking);
            setAttendees(data.attendees || []);
          } else {
            setError("Booking not found or invalid response.");
          }
        } catch (err) {
          console.error("JSON Parse Error:", err, text);
          setError("Server returned invalid JSON. Check API.");
        }
      })
      .catch(() => setError("Failed to fetch booking details."));
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

  // PDF generation
  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    let y = 40;

    doc.setFontSize(22);
    doc.setTextColor(0, 128, 0);
    doc.text("Payment Successful!", 40, y);
    y += 40;

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Thank you for booking your ticket to:", 40, y);
    y += 30;

    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.text("Kashmir Literature Festival 2025", 40, y);
    y += 40;

    doc.setFontSize(14);
    doc.setFont(undefined, "normal");
    doc.text("11th & 12th October", 40, y);
    y += 18;
    doc.text("Dal Lake Front, SKICC, Srinagar", 40, y);
    y += 35;

    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text("Your Booking Details:", 40, y);
    y += 25;

    doc.setFontSize(14);
    doc.setFont(undefined, "normal");
    doc.text(`Booking ID: ${bookingDetails.booking_id}`, 40, y);
    y += 18;
    doc.text(`Name: ${bookingDetails.name}`, 40, y);
    y += 18;
    doc.text(`Email: ${bookingDetails.email}`, 40, y);
    y += 18;
    doc.text(`Package: ${bookingDetails.package_type || bookingDetails.package || "N/A"}`, 40, y);
    y += 18;

    if (bookingDetails.description) {
      doc.text(`Description: ${bookingDetails.description}`, 40, y);
      y += 18;
    }

    // Use created_at instead of booking_date
    if (bookingDetails.created_at) {
      doc.text(`Booking Time: ${bookingDetails.created_at}`, 40, y);
      y += 18;
    }

    doc.setFont(undefined, "bold");
    doc.text(`Amount Paid: ${bookingDetails.amount}`, 40, y);
    y += 25;

    if (attendees.length > 0) {
      doc.setFont(undefined, "bold");
      doc.text("Ticket Holders:", 40, y);
      y += 20;
      doc.setFont(undefined, "normal");
      attendees.forEach((attendee, index) => {
        doc.text(
          `#${index + 1} - ${attendee.name}${attendee.email ? ` (${attendee.email})` : ""}`,
          40,
          y
        );
        y += 18;
      });
    }

    y += 20;
    doc.setFont(undefined, "bold");
    doc.setTextColor(0, 128, 0);
    doc.text("A confirmation mail has been sent to your registered email.", 40, y);

    doc.save(`Booking_${bookingDetails.booking_id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>

        <p className="text-xl text-gray-700 font-semibold">Thank you for booking your ticket to</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">Kashmir Literature Festival 2025</h2>
        <p className="text-md text-gray-600 mt-1">
          11th & 12th October <br />
          Dal Lake Front, SKICC, Srinagar
        </p>

        <div className="mt-6 text-left border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Booking Details:</h3>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Booking ID:</span> {bookingDetails.booking_id}</li>
            <li><span className="font-medium">Name:</span> {bookingDetails.name}</li>
            <li><span className="font-medium">Email:</span> {bookingDetails.email}</li>
            <li><span className="font-medium">Package:</span> {bookingDetails.package_type || bookingDetails.package || "N/A"}</li>
            {bookingDetails.description && <li><span className="font-medium">Description:</span> {bookingDetails.description}</li>}
            {bookingDetails.created_at && <li><span className="font-medium">Booking Time:</span> {bookingDetails.created_at}</li>}
            <li><span className="font-medium">Amount Paid:</span> ₹{bookingDetails.amount}</li>
          </ul>
        </div>

        {attendees.length > 0 && (
          <div className="mt-6 text-left border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Ticket Holders:</h3>
            <ul className="space-y-2 text-gray-700">
              {attendees.map((attendee, index) => (
                <li key={index} className="p-3 border rounded-lg bg-gray-50 shadow-sm">
                  <span className="font-medium">#{index + 1}</span> - {attendee.name}
                  {attendee.email ? ` (${attendee.email})` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-green-700 font-semibold">📩 A confirmation mail has been sent to your registered email.</p>

        <div className="flex justify-center mt-6 gap-4">
          <button onClick={downloadPDF} className="bg-purple-600 text-white px-6 py-2 rounded-xl shadow hover:bg-purple-700 transition">
            Download PDF
          </button>
          <button onClick={() => navigate("/")} className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
