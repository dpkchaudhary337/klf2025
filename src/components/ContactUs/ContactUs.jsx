import React, { useState } from "react";
import inspireBg from "../../assets/Group 44493.png";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.contactNumber) {
      setError("Name, email, and contact number are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("https://api-dbaxa3zxka-uc.a.run.app/srikula/contactus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccess("Thank you for your message! We will get back to you soon.");
          setFormData({ name: "", email: "", contactNumber: "", message: "" });
        } else {
          setError("Failed to submit the form. Please try again later.");
        }
      } catch (error) {
        console.error("Error during submission:", error);
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${inspireBg})` }}
    >
      <div className="bg-white p-6 sm:p-8 shadow-lg w-full max-w-lg rounded-lg mx-4 h-full">
        <h2 className="text-2xl font-bold text-center text-[#BA451C] mb-6">
          Contact Us
        </h2>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-700 text-sm sm:text-base">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              placeholder="Your Contact Number"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1 resize-none text-sm sm:text-base"
              placeholder="Your Message (Optional)"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#BA451C] hover:bg-[#FF9F69] text-white font-medium py-2 rounded-md transition-all text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
