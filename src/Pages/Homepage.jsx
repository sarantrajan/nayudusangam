import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SuceessGallery from '../Components/SuceessGallery';
import Footer from '../Components/Footer';
import CTAsection from '../Components/CTAsection';

function Homepage() {
  return (
    <div className="overflow-x-hidden"> {/* FIXED: Prevents horizontal scroll */}
      <Navbar/>
      <Hero/>
      <SuceessGallery/>
      <CTAsection/><br />
      <Footer/>
    </div>
  );
}

export default Homepage;