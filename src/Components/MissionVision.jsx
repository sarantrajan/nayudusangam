import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#ffe4ec] via-[#ffd6e2] to-[#fff0f6]">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          நோக்கம் & கொள்கை
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          சமூக முன்னேற்றத்திற்கும் மனிதாபிமான வளர்ச்சிக்கும் வழிகாட்டும் எங்கள் நோக்கம் மற்றும் கொள்கை.
        </motion.p>

        {/* Grid Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {/* 🩷 Mission Card */}
          <motion.div
            className="relative group bg-gradient-to-br from-[#fff0f4]/80 to-[#ffd6e2]/80 border border-pink-200 rounded-3xl shadow-xl overflow-hidden backdrop-blur-md transition-transform duration-500 hover:-translate-y-2 w-full max-w-md h-[380px] flex flex-col justify-between"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-600 to-pink-400" />

            <div className="p-8 text-left relative z-10 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-600 p-3 rounded-full shadow-md">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-600">எங்கள் நோக்கம்</h3>
              </div>

              <p className="text-gray-700 text-base leading-relaxed text-justify flex-grow">
                சமூகத்தில் ஒவ்வொருவருக்கும் சம வாய்ப்பு வழங்கி, கல்வி, சுகாதாரம் மற்றும் பொருளாதார முன்னேற்றத்தின் மூலம் மனித வாழ்க்கையை உயர்த்துவதே எங்கள் நோக்கம்.  
                ஒற்றுமை, அன்பு, நம்பிக்கை ஆகியவற்றை அடிப்படையாகக் கொண்டு இளைஞர்கள், பெண்கள் மற்றும் பின்தங்கிய சமூகங்களுக்கு வலுசேர்ப்பதே எங்கள் பணி.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/60 to-transparent" />
          </motion.div>

          {/* 💗 Vision Card */}
          <motion.div
            className="relative group bg-gradient-to-bl from-[#fff0f6]/80 to-[#ffd8e6]/80 border border-pink-200 rounded-3xl shadow-xl overflow-hidden backdrop-blur-md transition-transform duration-500 hover:-translate-y-2 w-full max-w-md h-[380px] flex flex-col justify-between"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-pink-400 to-pink-200" />

            <div className="p-8 text-left relative z-10 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-500 p-3 rounded-full shadow-md">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-500">எங்கள் கொள்கை</h3>
              </div>

              <p className="text-gray-700 text-base leading-relaxed text-justify flex-grow">
                “ஒற்றுமை தான் வலிமை — கல்வி தான் முன்னேற்றத்தின் திறவுகோல்.”  
                அனைவருக்கும் சம வாய்ப்பு, மதிப்புடன் வாழும் உரிமை மற்றும் சமூக முன்னேற்றம் எங்கள் அறக்கட்டளையின் அடிப்படை கொள்கைகள்.  
                நாங்கள் எங்கள் சமுதாயத்திற்கும் நாட்டிற்கும் சிறந்த பங்களிப்பை வழங்கும் நோக்கத்துடன் தொடர்ந்து முன்னேறுகிறோம்.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-pink-400/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
