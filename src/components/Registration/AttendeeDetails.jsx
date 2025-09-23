import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("🌐 API_BASE_URL:", API_BASE_URL);

export default function AttendeeDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookingData, packages } = location.state || {};
  if (!bookingData) {
    return <p className="text-center text-red-500">No booking data found.</p>;
  }

  const selectedPackage = packages.find(
    (p) => p.name === bookingData.package_type
  );
  const pricePerPerson = selectedPackage
    ? parseFloat(selectedPackage.price)
    : 0;
  const totalAmount = pricePerPerson * bookingData.persons;

  // ✅ Attendee details state
  const [attendees, setAttendees] = useState(
    Array.from({ length: bookingData.persons }, (_, index) => ({
      name: index === 0 ? bookingData.name : "",
      email: index === 0 ? bookingData.email : "",
      phone: index === 0 ? bookingData.phone : "",
      whatsapp: index === 0 ? bookingData.phone : "",
      ageGroup: "",
      gender: "",
      organisation: "",
      designation: "",
      referral: "",
      photo: null,
    }))
  );

  const [openIndex, setOpenIndex] = useState(0); // first panel open
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...attendees];
    updated[index][field] = value;
    setAttendees(updated);
  };

  // ✅ Check form validity (all mandatory fields must be filled)
  useEffect(() => {
    const valid = attendees.every(
      (p) =>
        p.name.trim() !== "" &&
        p.whatsapp.trim().length === 10 &&
        p.ageGroup.trim() !== "" &&
        p.gender.trim() !== ""
    );
    setIsFormValid(valid);
  }, [attendees]);

  // ✅ Payment flow
  const handlePayment = async () => {
    try {
      // 1. Save booking
      const saveResp = await fetch(`${API_BASE_URL}save_booking.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingData: { ...bookingData, amount: totalAmount },
          attendees,
        }),
      });

      const saveResult = await saveResp.json();
      console.log("Save Booking Response:", saveResult);

      if (saveResult.status !== "success") {
        alert("Error saving booking: " + saveResult.message);
        return;
      }

      const bookingId = saveResult.booking_id;

      // 2. Create Razorpay order
      const orderResp = await fetch(`${API_BASE_URL}create_order.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount, booking_id: bookingId }),
      });

      const orderData = await orderResp.json();
      console.log("Order Response:", orderData);

      if (orderData.status !== "success") {
        alert("Error creating Razorpay order: " + orderData.message);
        return;
      }

      // 3. Razorpay options
      const options = {
        key: "rzp_test_RFVIJ9sr5rkQXw",
        amount: totalAmount * 100,
        currency: "INR",
        name: "KASHMIR LITERATURE FESTIVAL 2025",
        description: "Booking Payment",
        order_id: orderData.order_id,
        handler: async function (response) {
          // 4. Verify payment
          const verifyResp = await fetch(`${API_BASE_URL}verify_payment.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              booking_id: bookingId,
            }),
          });

          const verifyResult = await verifyResp.json();
          console.log("Verify Payment Response:", verifyResult);

          if (verifyResult.status === "success") {
            navigate("/payment-success", { state: { bookingId } });
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: bookingData.name,
          email: bookingData.email,
          contact: bookingData.phone,
        },
        theme: { color: "#8b5cf6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Something went wrong during payment!");
    }
  };

  // ✅ Accordion Panels for persons
  const personForms = attendees.map((person, index) => (
    <div
      key={index}
      className="bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl shadow-lg mb-6"
    >
      {/* Panel Header */}
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full flex justify-between items-center p-4 text-left font-bold text-lg text-purple-700"
      >
        👤 Person {index + 1}
        <span>{openIndex === index ? "▲" : "▼"}</span>
      </button>

      {/* Panel Body */}
      {openIndex === index && (
        <div className="p-6 border-t border-purple-200">
          {/* Name (Required) */}
          <div className="mb-3">
            <label className="block font-medium">Name *</label>
            <input
              type="text"
              value={person.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          {/* WhatsApp (Required) */}
          <div className="mb-3">
            <label className="block font-medium">WhatsApp Number *</label>
            <input
              type="tel"
              value={person.whatsapp}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                handleChange(index, "whatsapp", val);
              }}
              maxLength={10}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
            {person.whatsapp && person.whatsapp.length !== 10 && (
              <p className="text-red-500 text-sm">
                Mobile number must be 10 digits
              </p>
            )}
          </div>

          {/* Age Group (Required) */}
          <div className="mb-3">
            <label className="block font-medium">Age Group *</label>
            <select
              value={person.ageGroup}
              onChange={(e) => handleChange(index, "ageGroup", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            >
              <option value="">Select...</option>
              <option value="Below 18">Below 18</option>
              <option value="18-25">18-25</option>
              <option value="26-40">26-40</option>
              <option value="41-60">41-60</option>
              <option value="60+">60+</option>
            </select>
          </div>

          {/* Gender (Required) */}
          <div className="mb-3">
            <label className="block font-medium">Gender *</label>
            <select
              value={person.gender}
              onChange={(e) => handleChange(index, "gender", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email (Optional) */}
          <div className="mb-3">
            <label className="block font-medium">Email (Optional)</label>
            <input
              type="email"
              value={person.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Organisation (Optional) */}
          <div className="mb-3">
            <label className="block font-medium">Organisation (Optional)</label>
            <input
              type="text"
              value={person.organisation}
              onChange={(e) =>
                handleChange(index, "organisation", e.target.value)
              }
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Designation (Optional) */}
          <div className="mb-3">
            <label className="block font-medium">Designation (Optional)</label>
            <input
              type="text"
              value={person.designation}
              onChange={(e) =>
                handleChange(index, "designation", e.target.value)
              }
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Referral (Optional) */}
          <div className="mb-3">
            <label className="block font-medium">
              How did you hear about us? (Optional)
            </label>
            <input
              type="text"
              value={person.referral}
              onChange={(e) => handleChange(index, "referral", e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Photo (Optional) */}
          <div className="mb-3">
            <label className="block font-medium">
              Upload Profile Photo (Optional)
            </label>
            <input
              type="file"
              onChange={(e) =>
                handleChange(index, "photo", e.target.files[0] || null)
              }
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/90 via-white/95 to-purple-100/90 py-10">
      <div className="w-full max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
          📝 Attendee Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Forms */}
          <div className="md:col-span-2">{personForms}</div>

          {/* Summary */}
          <div className="md:col-span-1">
            <div className="bg-white/90 backdrop-blur-md border border-purple-200 p-6 rounded-2xl shadow-2xl sticky top-4">
              <h3 className="font-bold text-xl mb-4 text-purple-700">
                📋 Booking Summary
              </h3>
              <p>
                <strong>Package:</strong> {bookingData.package_type}
              </p>
              <p>
                <strong>Persons:</strong> {bookingData.persons}
              </p>
              <p>
                <strong>Price/Person:</strong> ₹{pricePerPerson.toFixed(2)}
              </p>
              <p className="mb-4">
                <strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}
              </p>

              <button
                onClick={handlePayment}
                disabled={!isFormValid}
                className={`w-full py-3 rounded-lg font-semibold text-lg shadow-lg transform transition duration-300 ${
                  isFormValid
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                💳 Pay & Complete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
