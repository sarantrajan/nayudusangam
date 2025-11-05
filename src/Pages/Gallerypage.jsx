import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg1 from "../assets/gal-10.jpg";
import Gallery from "../Components/Gallery";

function Gallerypage() {
  return (
    <div className="overflow-x-hidden"> {/* FIXED: Prevents horizontal scroll */}
      <Navbar />
      <div
        className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 mt-[72px] sm:mt-[80px]" // Navbar height ku adjust pannirukken
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center text-white max-w-3xl mx-auto px-4"> {/* Added mx-auto */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Moments captured from Tamizhaga Naidu Koottamaippu Arakattali.
          </p>
        </div>
      </div>

      <Gallery />
      <Footer />
    </div>
  );
}

export default Gallerypage;