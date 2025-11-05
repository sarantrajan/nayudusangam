import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import contactbg from "../assets/con-3.avif";
import ContactSection from "../Components/ContactSection";

function Contactpage() {
  return (
    <div className="overflow-x-hidden"> {/* FIXED: Prevents horizontal scroll */}
      <Navbar />
      <div
        className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 mt-[72px] sm:mt-[80px]" // Navbar height ku adjust pannirukken
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white max-w-3xl mx-auto px-4"> {/* Added mx-auto */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"> {/* Responsive text */}
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-200">
            Tamizhaga Naidu Koottamaippu Trust promotes social welfare and education.
            Join us in building a stronger, united community.
          </p>
        </div>
      </div>

      <ContactSection /> {/* Itha inga add panren */}
      <Footer />
    </div>
  );
}

export default Contactpage;