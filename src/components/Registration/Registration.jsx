import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package_type: "",
    persons: 1,
    diamond_price: "",
  });

  const [packages, setPackages] = useState([]);
  const [errors, setErrors] = useState({});

  // Fetch packages
  useEffect(() => {
    fetch(`${API_BASE_URL}get_packages.php`)
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((err) => console.error("Error fetching packages:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits.";
    if (!formData.package_type) newErrors.package_type = "Select a package.";
    if (!formData.persons || formData.persons < 1)
      newErrors.persons = "At least 1 person required.";

    // Diamond validation
    if (formData.package_type.toLowerCase().includes("diamond")) {
      if (
        !formData.diamond_price ||
        parseInt(formData.diamond_price) < 100000
      ) {
        newErrors.diamond_price = "Donation min ₹1,00,000 required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let bookingData = { ...formData };

    if (formData.package_type.toLowerCase().includes("diamond")) {
      bookingData.price = formData.diamond_price;
    } else {
      const selected = packages.find(
        (pkg) => pkg.name === formData.package_type
      );
      bookingData.price = selected ? selected.price : 0;
      bookingData.description = selected ? selected.description : "";
    }

    navigate("/attendee-details", { state: { bookingData, packages } });
  };

  const selectedPackage = packages.find(
    (pkg) => pkg.name === formData.package_type
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-[#FFDDCB] to-[#FFBE9A] relative px-4 py-10">
      <div className="absolute inset-0 bg-white/40"></div>

      <div
        className={`relative w-full transition-all duration-700 ${
          formData.package_type ? "max-w-6xl" : "max-w-lg"
        }`}
      >
        <div
          className={`flex flex-col md:flex-row gap-8 ${
            formData.package_type ? "" : "items-center"
          }`}
        >
          {/* Form Section */}
          <div
            className={`bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full ${
              formData.package_type ? "md:w-1/2" : "max-w-lg mx-auto"
            }`}
            data-aos={formData.package_type ? "fade-right" : ""}
          >
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
                      {pkg.name} (₹{parseInt(pkg.price).toLocaleString()})
                    </option>
                  ))}
                </select>
                {errors.package_type && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.package_type}
                  </p>
                )}
              </div>

              {/* Diamond input */}
              {formData.package_type.toLowerCase().includes("diamond") && (
                <div>
                  <label className="block font-medium">
                    Enter Donation Amount*
                  </label>
                  <input
                    type="number"
                    name="diamond_price"
                    value={formData.diamond_price}
                    onChange={handleInputChange}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                    placeholder="Enter donation amount"
                  />
                  {errors.diamond_price && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.diamond_price}
                    </p>
                  )}
                </div>
              )}

              {/* Persons */}
              <div>
                <label className="block font-medium">Number of Persons</label>
                <input
                  type="number"
                  name="persons"
                  min="1"
                  max="10"
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

          {/* Package Description Section */}
          {selectedPackage && (
            <div
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full md:w-1/2"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                {selectedPackage.name}
              </h3>

              {/* Description in points */}
              {selectedPackage.description ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {selectedPackage.description.split(",").map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point.trim()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">No description available.</p>
              )}

              <div className="mt-4 text-lg font-semibold text-pink-600">
                Price: ₹{parseInt(selectedPackage.price).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
