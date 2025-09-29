import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/gallery/2024/galleryBg.png";
import logo from "../../assets/srikulalogo.png";
import paymentBg from "../../assets/paymetBg.png";

export function ShrikulaDonation() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });
  };

  const handleDonation = async () => {
    if (Number(amount) <= 0 || isNaN(Number(amount))) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please refresh and try again.");
      return;
    }

    try {
      const response = await fetch(
        "https://api-dbaxa3zxka-uc.a.run.app/srikula/createpayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: Number(amount), note }),
        }
      );

      const order = await response.json();
      if (!order.order_id) throw new Error("Failed to create Razorpay order");

      const options = {
        key: "rzp_live_VUs6MEIFtSvIEc",
        amount: order.amount,
        currency: "INR",
        name: "Srikula Foundation",
        description: "Donation",
        order_id: order.order_id,
        handler: function () {
          navigate("/thank-you");
        },
        theme: {
          color: "#BA451C",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error during donation:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4 font-inter"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="w-14 h-14 rounded-full shadow" />
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800">
          Kashmir Literature Festival
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          A Srikula Foundation Initiative
        </p>

        {/* Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Donation Amount
          </label>
          <div className="flex items-center justify-center mt-2">
            <span className="text-2xl font-bold text-gray-800 mr-2">₹</span>
            <input
              type="text"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value.replace(/[^0-9]/g, ""))
              }
              className="text-2xl text-center border-b-2 border-gray-400 focus:border-[#BA451C] outline-none w-28"
              placeholder="0"
            />
          </div>
        </div>

        {/* Note */}
        <input
          type="text"
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-gray-100 text-black text-center py-2 rounded-md mb-6 focus:outline-none"
        />

        {/* Button */}
        <button
          onClick={handleDonation}
          className="w-full py-3 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200"
        >
          Donate ₹{amount || 0}
        </button>
      </div>
    </div>
  );
}
