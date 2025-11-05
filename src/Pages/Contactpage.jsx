import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import contactbg from "../assets/con-3.avif";
import ContactSection from "../Components/ContactSection";

function Contactpage() {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative text-center text-white max-w-3xl px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-200">
 Tamizhaga Naidu Koottamaippu Trust promotes social welfare and education.
Join us in building a stronger, united community.
          </p>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contactpage;
