import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import aboutimg from "../assets/about.webp";
import OurStory from "../Components/OurStory";
import MissionVision from "../Components/MissionVision";
import TeamSection from "../Components/TeamSection";

function Aboutpage() {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
{/* Content */}
<div className="relative text-center text-white max-w-full px-4 flex flex-row items-center justify-center gap-6 flex-nowrap">
  <h1 className="text-1xl sm:text-3xl md:text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
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
