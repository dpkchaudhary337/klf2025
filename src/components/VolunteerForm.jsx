import React, { useState } from "react";

export const VolunteerForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.interest) newErrors.interest = "Interest field is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted", formData);
      // Clear form and errors
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        notes: "",
      });
      setErrors({});
      alert("Thank you for signing up as a volunteer!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 px-8 py-16 bg-gray-50">
      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          BECOME A VOLUNTEER
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 8452 4144 222"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Interested In Input */}
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-gray-700"
            >
              Interested In <span className="text-red-500">*</span>
            </label>
            <textarea
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              placeholder="Please provide more details about your inquiry"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.interest ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              rows="3"
              required
            />
            {errors.interest && (
              <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
            )}
          </div>

          {/* Notes Input */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional information"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-brown-700 hover:bg-brown-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-gray-600">
        <h3 className="text-lg font-semibold text-gray-900">
          Join Us in Making a Difference
        </h3>
        <p className="mt-4">
          We believe everyone has the power to make the world a better place. As
          a volunteer, your contribution – big or small – can create a ripple
          effect of kindness and hope.
        </p>
        <p className="mt-4">
          Ready to make an impact?{" "}
          <span className="text-blue-500 cursor-pointer underline">
            [Sign Up Now]
          </span>{" "}
          or contact us at{" "}
          <span className="text-blue-500 cursor-pointer underline">
            [email/phone]
          </span>{" "}
          for more details.
        </p>
        <p className="mt-4">
          Together, let’s inspire change and create a brighter future!{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </p>
      </div>
    </div>
  );
};
