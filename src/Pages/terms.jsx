// src/pages/Terms.jsx
import React, { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0); // Page load पर scroll top
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-16 px-6 lg:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-900">Terms & Conditions</h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Kashmir Literature Festival website, you agree to comply with these Terms & Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Website Use</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You may use this website only for legitimate purposes.</li>
            <li>Unauthorized attempts to access restricted areas or compromise security are strictly prohibited.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Payments & No Refunds</h2>
          <p>
            All payments are processed through secure third-party payment gateways (e.g., Razorpay, Stripe, Paytm, CCAvenue). Once a payment is completed, it is <strong>strictly non-refundable</strong>. Users are responsible for providing accurate payment details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. User Data & Privacy</h2>
          <p>
            We <strong>do not store any personal data</strong> from users on our servers. We do not use cookies or tracking tools. Payment information is handled only by the third-party provider and is subject to their privacy and security policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property</h2>
          <p>
            All content on the website, including text, images, logos, and designs, is owned by the Festival or its partners and may not be reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Liability</h2>
          <p>
            We are not responsible for any loss or damage resulting from the use of the website or reliance on its content. We do not guarantee uninterrupted access but will make reasonable efforts to maintain functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms & Conditions at any time. Updated terms will be posted on the website with the effective date. Continued use of the website constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
          <p>
            For any queries regarding these Terms & Conditions, contact us at: <strong>[email/phone]</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
