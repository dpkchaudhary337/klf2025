// src/pages/Privacy.jsx
import React, { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0); // Page load पर scroll top
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-16 px-6 lg:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-900">Privacy Policy</h1>
        <p className="mt-2 text-gray-700">
          Effective Date: [30 Sept 2025]
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Kashmir Literature Festival (“we”, “our”, “Festival”) respects your privacy. This policy explains what information we may collect, why, and how it is used or protected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Key Summary</h2>
          <p>
            Our website <strong>does not store any visitor/user personal data</strong> and <strong>does not use cookies</strong>, except for technical cookies that browsers may create automatically (which we do not record or track). Payment processing is done through a <strong>third-party payment provider</strong>, which handles your payment information according to their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. What We Do Not Do</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>We do not store your name, email, phone number, or any other personal information on our servers.</li>
            <li>We do not use tracking cookies, analytics tools, or remarketing pixels.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Payment Providers</h2>
          <p>
            If you purchase tickets or services, payments are processed via third-party providers (e.g., Razorpay, Stripe, Paytm, CCAvenue). Your payment details (card number, bank info, etc.) are handled <strong>only</strong> by the payment provider and are subject to their privacy and security policies. Please review their policies before completing the payment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Security</h2>
          <p>
            Although we do not collect personal data, we maintain technical security measures like HTTPS, server updates, and other standard protections. However, no online system can guarantee 100% security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
          <p>
            For any questions regarding this Privacy Policy, contact us at: <strong>[contact@kashmirliteraturefestival.com]</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
