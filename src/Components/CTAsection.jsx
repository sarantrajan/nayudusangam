import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/sangam-1.jpg";
import bg2 from "../assets/sangam-2.jpg";
import bg3 from "../assets/sangam-3.jpg";
import bg5 from "../assets/sangam-5.jpg";

export default function CTAsection() { // Renamed from Hero to CTAsection
  const images = [bg1, bg2, bg3, bg5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // FIXED: Removed min-h-screen, added py-16, adjusted padding
    <section className="relative w-full py-16 bg-gradient-to-br from-[#e6f7f1] via-[#ffffff] to-[#d2f1dc] flex flex-col items-center justify-start overflow-hidden px-4">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex justify-center"
      >
        <div
          className="box-2xl px-5 py-3 shadow-2xl"
          style={{
            background:
              "linear-gradient(90deg, #b84b0e 0%, #e65e10 50%, #ffb566 100%)",
            backgroundSize: "200% 200%",
            animation: "gradientShift 8s ease infinite",
            boxShadow: "0 0 25px rgba(230, 94, 16, 0.5)",
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg"> {/* Responsive text */}
            சமீபத்திய நிகழ்வுகள்
          </h1>
        </div>
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </motion.div>

      {/* Slideshow Container (Responsive Height) */}
      {/* FIXED: Adjusted height, added max-w-6xl and mx-auto */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 h-[40vh] sm:h-[60vh] md:h-[70vh] overflow-hidden box-2xl shadow-2xl rounded-2xl">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover" // Removed rounded-2xl
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}