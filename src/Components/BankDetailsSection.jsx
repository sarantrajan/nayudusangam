import React from "react";
import bankimg from "../assets/qr.svg";

export default function BankDetailsSection() {
  return (
    <section className="pt-16 pb-16 bg-gray-100">
      <div className="text-center text-black px-4 pb-5 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Donate & Support Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
          Your generous contribution helps us continue our mission of providing
          community support, education, healthcare, and disaster relief to those
          in need.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-3xl bg-white text-black">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Bank Details</h2>
          <p className="text-lg">
            You can directly contribute to our foundation using the following
            bank details:
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6  space-y-4">
            <p>
              <span className="font-semibold">Bank Name:</span> State Bank of
              India
            </p>
            <p>
              <span className="font-semibold">Account Holder:</span> All People
              Welfare Foundation
            </p>
            <p>
              <span className="font-semibold">Account Number:</span>{" "}
              123456789012
            </p>
            <p>
              <span className="font-semibold">IFSC Code:</span> SBIN0001234
            </p>
            <p>
              <span className="font-semibold">Branch:</span> Madurai Main Branch
            </p>
          </div>

          <p className="italic text-sm text-gray-500">
            * Please share your transaction details via email after payment for
            receipt generation.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center items-center">
          <img
            src={bankimg}
            alt="Bank / QR Code"
            className="w-full max-w-md "
          />
        </div>
      </div>
    </section>
  );
}
