import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg1 from "../assets/gal-10.jpg";
import Gallery from "../Components/Gallery";

function Gallerypage() {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-[40vh] sm:h-[60vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Moments captured from  Tamizhaga Naidu Koottamaippu Arakattali.
          </p>
        </div>
      </div>

      <Gallery />
      <Footer />
    </div>
  );
}

export default Gallerypage;
