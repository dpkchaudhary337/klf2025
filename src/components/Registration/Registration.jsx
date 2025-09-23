import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("🌐 API_BASE_URL:", API_BASE_URL);

export default function Booking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package_type: "",
    persons: 1,
  });

  const [packages, setPackages] = useState([]);
  const [errors, setErrors] = useState({});

  // ✅ Packages fetch (using API_BASE_URL)
  useEffect(() => {
    fetch(`${API_BASE_URL}get_packages.php`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Packages fetched:", data);
        setPackages(data);
      })
      .catch((err) => console.error("❌ Error fetching packages:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits.";
    }

    if (!formData.package_type)
      newErrors.package_type = "Please select a package.";

    if (!formData.persons || formData.persons < 1)
      newErrors.persons = "At least 1 person is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/attendee-details", {
        state: { bookingData: formData, packages },
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-[#FFDDCB] to-[#FFBE9A] relative">
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          🎟 Book Your Package
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium">Phone*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="10 digit phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Package */}
          <div>
            <label className="block font-medium">Package*</label>
            <select
              name="package_type"
              value={formData.package_type}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="">-- Select Package --</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name} ({pkg.price === "0.00" ? "Free" : `₹${pkg.price}`})
                </option>
              ))}
            </select>
            {errors.package_type && (
              <p className="text-red-500 text-sm mt-1">{errors.package_type}</p>
            )}
          </div>

          {/* Persons */}
          <div>
            <label className="block font-medium">Number of Persons</label>
            <input
              type="number"
              name="persons"
              min="1"
              value={formData.persons}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
            {errors.persons && (
              <p className="text-red-500 text-sm mt-1">{errors.persons}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Continue →
          </button>
        </form>
      </div>
    </div>
  );
}
