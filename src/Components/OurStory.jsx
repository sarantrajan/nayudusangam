import React from "react";
import { motion } from "framer-motion";
import storyImg from "../assets/naidu.jpeg";

export default function OurStory() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#e6f7f1] via-[#ffffff] to-[#d2f1dc] overflow-hidden" // FIXED: Added overflow, padding
      id="our-story"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004d00] mb-12 text-center drop-shadow-md"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை
      </motion.h2>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* FIXED: Removed fixed style, added responsive classes */}
          <motion.img
            src={storyImg}
            alt="Our Story"
            className="rounded-3xl shadow-2xl object-cover border-[6px] border-[#006400] hover:border-[#00a651] transition-all duration-500 w-full max-w-lg h-auto aspect-video" // Responsive
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 3 }}
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left flex flex-col justify-center space-y-6">
          <motion.p
            className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-semibold text-[#004d00]">
              தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை
            </span>{" "}
            என்பது நாயுடு சமூகத்தின் ஒற்றுமை, முன்னேற்றம் மற்றும் சமூகநல
            பணிகளுக்காக உருவாக்கப்பட்ட ஒரு நற்பணி அமைப்பாகும்.
            சமூகத்தில் கல்வி, தொழில், மற்றும் பொருளாதார வளர்ச்சி அடைய ஏற்ற
            சூழலை உருவாக்குவது எங்கள் முக்கிய நோக்கம்.
          </motion.p>
          {/* ... (matha <p> tags appadiye irukkattum) ... */}
          <motion.p
            className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            viewport={{ once: true, amount: 0.3 }}
          >
            எங்கள் அறக்கட்டளை கல்வி உதவித்தொகைகள், இளைஞர்களுக்கான தொழில் வழிகாட்டல்,
            சமூக நலத்திட்டங்கள் மற்றும் மருத்துவ உதவிகள் போன்ற பல்வேறு சேவைகளை
            தொடர்ந்து செய்து வருகிறது. நாயுடு சமூகத்தின் இளம் தலைமுறையினருக்கு
            தன்னம்பிக்கை மற்றும் தலைமைத்துவ திறனை வளர்ப்பதே எங்கள் நோக்கம்.
          </motion.p>
           <motion.p
            className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.8}
            viewport={{ once: true, amount: 0.3 }}
          >
            நாயுடு சமூகத்தின் பண்பாடு, மரபு, மற்றும் ஒற்றுமையை நிலைநிறுத்தி,
            சமூகத்தில் சமத்துவம், பணிவு மற்றும் மனிதநேயம் நிலவுவதை நோக்கமாகக்
            கொண்டுள்ளது. கல்வி, தொழில் வளர்ச்சி மற்றும் பெண்கள் முன்னேற்றம்
            போன்ற துறைகளிலும் நாங்கள் செயல்படுகின்றோம்.
          </motion.p>
           <motion.p
            className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1.0}
            viewport={{ once: true, amount: 0.3 }}
          >
            அரசாங்கத்தின் பல்வேறு நலத்திட்டங்களுடன் இணைந்து சமூக முன்னேற்றத்தை
            அடைய எங்கள் அறக்கட்டளை தொடர்ந்து முயற்சி செய்து வருகிறது.
            ஒற்றுமை, பணிவு, சேவை — இவைதான் எங்கள் அடிப்படை மதிப்புகள்.
            நம் சமூகத்தின் ஒவ்வொரு நபரும் தங்கள் திறமையால் உயர்வதற்கு
            வழிவகுப்பதே எங்கள் பணி.
          </motion.p>
          <motion.p
            className="text-lg font-semibold text-[#004d00] text-center md:text-left italic"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1.2}
            viewport={{ once: true, amount: 0.3 }}
          >
            “ஒன்றுபட்டால் உயர்வு – அதுவே எங்கள் அடையாளம்!”
          </motion.p>
        </div>
      </div>
    </section>
  );
}