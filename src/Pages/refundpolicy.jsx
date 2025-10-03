// src/pages/RefundPolicy.jsx
import React, { useEffect } from "react";

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0); // Page load पर scroll top
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 py-16 px-6 lg:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-900">Refund Policy</h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-2">No Refund Policy</h2>
          <p>
            All purchases, including tickets and services for the Kashmir Literature Festival, are <strong>strictly non-refundable</strong>. Once a payment is completed, it cannot be canceled or refunded under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Payment Responsibility</h2>
          <p>
            All payments are processed through secure third-party gateways (e.g., Razorpay, Stripe, Paytm, CCAvenue). Users are responsible for providing correct payment details. We are not responsible for failed or incorrect transactions due to user errors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Third-Party Issues</h2>
          <p>
            Any issues arising from the third-party payment provider, such as processing delays, transaction failures, or bank-related matters, are handled by the payment provider according to their policies. We cannot reverse or refund payments in such cases.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            For any payment-related questions, please contact us at: <strong>[contact@kashmirliteraturefestival.com]</strong>. Please note that this does not override our <strong>no-refund</strong> policy.
          </p>
        </section>
      </div>
    </div>
  );
}
