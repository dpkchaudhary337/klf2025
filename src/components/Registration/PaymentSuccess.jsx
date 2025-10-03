
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import QRCode from "qrcode";
import ePass from "../../assets/E-PASS.png"; // ticket template
import { loadFontAsBase64 } from "../../fontLoader";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const PROJECT_BASE_URL = import.meta.env.VITE_PROJECT_BASE_URL;

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

  // PDF generation with template
  const downloadPDF = async () => {
    const doc = new jsPDF("p", "pt", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();


    const capitalisBase64 = await loadFontAsBase64("/fonts/capitalis.ttf");
    doc.addFileToVFS("capitalis.ttf", capitalisBase64);
    doc.addFont("capitalis.ttf", "capitalis", "normal");
    doc.setFont("capitalis");

    // Background template
    const img = new Image();
    img.src = ePass;

    img.onload = async () => {
      doc.addImage(img, "PNG", 0, 0, pageWidth, pageHeight);

      doc.setFontSize(22);
      doc.setTextColor(0, 0, 0);

      const textY = pageHeight * 0.66;

      doc.text(`${bookingDetails.name}`, pageWidth / 2, textY, {
        align: "center",
      });
      doc.text(
        `${bookingDetails.phone || bookingDetails.mobile || "N/A"}`,
        pageWidth / 2,
        textY + 28,
        { align: "center" }
      );
      doc.text(
        `${bookingDetails.package_type || bookingDetails.package || "N/A"}`,
        pageWidth / 2,
        textY + 56,
        { align: "center" }
      );

      // ✅ QR Code with Verify Link
      const verifyUrl = `${PROJECT_BASE_URL}verify-ticket?booking_id=${bookingDetails.booking_id}`;
      const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
        width: 200,
      });

      const qrSize = 180;
      const qrX = (pageWidth - qrSize) / 2;
      const qrY = pageHeight - qrSize - pageHeight * 0.01;
      doc.addImage(qrDataUrl, "PNG", qrX, qrY, qrSize, qrSize);

      doc.save(`Booking_${bookingDetails.booking_id}.pdf`);
    };
  };

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
              <span className="font-medium">Email:</span> {bookingDetails.email}
            </li>
            <li>
              <span className="font-medium">Package:</span>{" "}
              {bookingDetails.package_type || bookingDetails.package || "N/A"}
            </li>
            {bookingDetails.description && (
              <li>
                <span className="font-medium">Description:</span>{" "}
                {bookingDetails.description}
              </li>
            )}
            {bookingDetails.created_at && (
              <li>
                <span className="font-medium">Booking Time:</span>{" "}
                {bookingDetails.created_at}
              </li>
            )}
            <li>
              <span className="font-medium">Amount Paid:</span> ₹
              {bookingDetails.amount}
            </li>
          </ul>

          {/* Show Attendee Details */}
          {attendees.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Attendee Details:
              </h4>
              <ul className="space-y-1 text-gray-700">
                {attendees.map((att, index) => (
                  <li key={index}>
                    👤 {att.name} ({att.email || "N/A"})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="mt-6 text-green-700 font-semibold">
          📩 A confirmation mail has been sent to your registered email.
        </p>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={downloadPDF}
            className="bg-purple-600 text-white px-6 py-2 rounded-xl shadow hover:bg-purple-700 transition"
          >
            Download Ticket PDF
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
