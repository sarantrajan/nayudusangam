import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/hero.jpeg";

export default function Hero() {
  const images = [bg1];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[40vh] sm:h-[60vh] md:h-[100vh] flex items-center justify-center overflow-hidden p-5 bg-red">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
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

    </div>
  );
}
