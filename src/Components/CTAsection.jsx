import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/sangam-1.jpg";
import bg2 from "../assets/sangam-2.jpg";
import bg3 from "../assets/sangam-3.jpg";
import bg5 from "../assets/sangam-5.jpg";

export default function Hero() {
  const images = [bg1, bg2, bg3, bg5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#e6f7f1] via-[#ffffff] to-[#d2f1dc] flex flex-col items-center justify-start overflow-hidden">
  {/* 🔹 Heading with Gradient Box */}
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="mt-24 flex justify-center"
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
  <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold text-white text-center drop-shadow-lg">
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



      {/* 🔹 Slideshow Container (Fixed Height) */}
      <div className="relative w-full mt-10 h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden box-2xl shadow-2xl">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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
