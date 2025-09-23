import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/gallery/2024/galleryBg.png";
import logo from "../../assets/srikulalogo.png";
import paymentBg from "../../assets/paymetBg.png";
export function ShrikulaDonation() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState(""); // State for the note input
  const [showPopup, setShowPopup] = useState(false);
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
      alert(
        "Failed to load Razorpay SDK. Please refresh the page and try again."
      );
      return;
    }

    if (!window.Razorpay) {
      alert(
        "Razorpay is not available. Please refresh the page and try again."
      );
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

      if (!order.order_id) {
        throw new Error("Failed to create Razorpay order");
      }

      const options = {
        key: "rzp_live_VUs6MEIFtSvIEc",
        amount: order.amount,
        currency: "INR",
        name: "Srikula Foundation",
        description: "Donation",
        order_id: order.order_id,
        handler: function (response) {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigate("/");
          }, 3000);
        },
        theme: {
          color: "#3399cc",
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
      className="flex justify-center items-center min-h-screen bg-cover bg-center font-inter"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center text-center mt-10 sm:w-[40vw]">
        {/* Header */}
        <h2 className="text-3xl font-bold text-black font-comic">
          Kashmir Literature Festival
        </h2>
        <p className="text-base text-black mt-1 font-semibold">
          A Srikula Foundation initiative
        </p>
        {/* Donation Card */}
        <div className=" p-6 text-center mt-8 relative">
          <div>
            <img
              src={paymentBg}
              className="w-[90vw] h-[70vh] sm:h-[40vh] lg:w-[25vw] lg:h-[80vh]"
            />
          </div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            {/* Logo */}
            <div className="w-12 h-12 mx-auto mb-4 bg-white shadow-md">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>

            {/* Title Section */}
            <h3 className="text-lg font-medium text-gray-700">Paying</h3>
            <h2 className="text-xl font-bold text-gray-800 mt-1 sm:w-[300px]">
              SRIKULA FOUNDATION
            </h2>
            <p className="text-sm text-blue-500 mt-2">
              razorpay.me/@srikulafoundation
            </p>

            {/* Donation Amount Input */}
            <div className=" flex flex-col gap-9 items-center ">
              <div className="flex items-center justify-center mt-6">
                <div className="flex items-center gap-2">
                  <p className="text-3xl text-gray-800 relative  left-5">₹</p>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) =>
                      setAmount(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="text-3xl text-center outline-none w-24"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Note Input */}
              <input
                type="text"
                placeholder="Add a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-[80%] bg-gray-100 text-black text-center mt-4 mb-4 py-1 rounded focus:outline-none "
              />

              {/* Submit Button */}
              <button
                onClick={handleDonation}
                className="w-full  text-white font-medium rounded-md py-2 mt-3 bg-[#BA451C] hover:bg-[#FF9F69] transition-all"
              >
                Pay ₹{amount || 0}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Section */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-[90%] max-w-md">
            <h3 className="text-lg font-medium text-gray-600">Thank You!</h3>
            <h2 className="text-xl font-bold text-gray-800 mt-2">
              Your Contribution Matters 🎉
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              We are deeply grateful for your support towards Srikula
              Foundation. Your help empowers lives!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
