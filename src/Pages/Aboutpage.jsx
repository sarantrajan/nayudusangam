import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import aboutimg from "../assets/about.webp";
import OurStory from "../Components/OurStory";
import MissionVision from "../Components/MissionVision";
import TeamSection from "../Components/TeamSection";

function Aboutpage() {
  return (
    <div className="overflow-x-hidden"> {/* FIXED: Prevents horizontal scroll */}
      <Navbar />
      <div
        className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 mt-[72px] sm:mt-[80px]" // Navbar height ku adjust pannirukken
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white max-w-full px-4 flex flex-row items-center justify-center gap-6 flex-nowrap">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight"> {/* Responsive text */}
            About Us
          </h1>
        </div>
      </div>

      <OurStory />
      <MissionVision />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default Aboutpage;