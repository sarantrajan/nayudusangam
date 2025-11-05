import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/hero.jpeg";

export default function Hero() {
  const images = [bg1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // FIXED: Adjusted height, added padding, removed bg-red
    <div className="relative h-[60vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden p-4 mt-[72px] sm:mt-[80px]">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          // FIXED: bg-contain -> bg-cover
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            width: "100%",
            height: "100%",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* FIXED: Added overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* FIXED: Added text content (from your other Hero file) */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light mb-8">
          சமூகம், கல்வி மற்றும் கலாச்சார வளர்ச்சிக்காக பாடுபடுகிறோம்.
        </p>
      </motion.div>
    </div>
  );
}