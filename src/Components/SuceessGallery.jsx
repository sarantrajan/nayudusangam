import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/leader-1.jpg";
import img2 from "../assets/leader-3.jpg";
import img3 from "../assets/leader-6.jpg";
import img4 from "../assets/leader-12.jpg";
// ... (matha images ellam import pannikonga)
import img5 from "../assets/leader-4.jpg";
import img6 from "../assets/leader-14.jpg";
import img7 from "../assets/leader-2.jpg";
import img8 from "../assets/leader-7.jpg";
import img9 from "../assets/leader-15.jpg";

const SuccessGallery = () => {
  const [selected, setSelected] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "பேரரசர் கிருஷ்ணதேவராயர்",
      image: img1,
      desc: `விஜயநகரப் பேரரசின் பேரரசர்களிலே மிகவும் புகழ் பெற்றவர் ஆவார். இவரது ஆட்சிக் காலமே பேரரசின் மிக உயர்ந்த நிலை ஆகும்...`, // Shortened for brevity
    },
    {
      id: 2,
      name: "மாமன்னர் திருமலை நாயக்கர் ",
      image: img2,
      desc: ` மதுரையை ஆண்ட நாயக்க மன்னர்களுள் மிகவும் புகழ் பெற்றவராவார். இவர் கி.பி 1623 தொடக்கம் 1659 வரையான காலப்பகுதியில் ஆட்சிப்பொறுப்பில் இருந்தார்...`, // Shortened
    },
    {
      id: 3,
      name: "பேரரசி ராணி மங்கம்மாள் ",
      image: img3,
      desc: `இராணி மங்கம்மாள் (இறப்பு: அண். 1705) பெண்கள் முடி சூட்டி ஆட்சி செய்யாத நாயக்கர் மரபில் காப்பாட்சியாளராக இருந்து மதுரையை 1689 முதல் 1704 வரை ஆண்ட பெண்மணி ஆவார்...`, // Shortened
    },
    // ... (matha leaders ah add pannunga)
    {
      id: 4,
      name: "மன்னர் ரகுநாத நாயக்கர்",
      image: img4,
      desc: `இரகுநாத நாயக்கர் (கி.பி.1600 – 1645) இவர் தஞ்சாவூரைத் தலைநகரமாகக் கொண்டு சோழமண்டலத்தை ஆண்டு வந்த தஞ்சாவூர் நாயக்கவம்சத்தின் மூன்றாவது மன்னன்...`
    },
    {
      id: 5,
      name: "மாவீரன் வீரபாண்டிய கட்டபொம்மன் ",
      image: img5,
      desc: `வீரபாண்டிய கட்டபொம்மன் (3 சனவரி 1760 - 16 அக்டோபர் 1799), தமிழகத்தில், ஆங்கிலேயர் ஆட்சியை எதிர்த்துப் போரிட்ட 18-ஆம் நூற்றாண்டைச் சேர்ந்த பாளையக்காரர் ஆவார்...`
    },
    {
      id: 6,
      name: "மன்னர் ஊமைத்துரை நாயக்கர் ",
      image: img6,
      desc: `ஊமைத்துரை (இயற்பெயர் குமாரசாமி நாயக்கர்) (இ. நவம்பர் 16, 1801) ஒரு தென் இந்திய பாளையக்காரர் ஆவார். பாஞ்சாலங்குறிச்சி பாளையக்காரர் வீரபாண்டிய கட்டபொம்மனின் தம்பியான இவர்...`
    },
    {
      id: 7,
      name: "விருப்பாச்சி கோபால் நாயக்கர் ",
      image: img7,
      desc: `கோபால் நாயக்கர் (இறப்பு: 20, நவம்பர், 1801) தமிழ்நாட்டில் ஆங்கிலேயர்க்கு எதிரான விடுதலைப் போராட்ட முன்னோடிகளுள் குறிப்பிடத்தக்கவர்...`
    },
    {
      id: 8,
      name: "ஜி.டி.நாயுடு ",
      image: img8,
      desc: `கோபால்சாமி துரைசாமி பலரால் ஜி. டி. நாயுடு என்று அறியப்படுபவர் (G. D. Naidu, மார்ச் 23, 1893 -சனவரி 4, 1974) தமிழகத்தின் அறிவியல் துறையில் சாதனைகள் படைத்தவர்...`
    },
    {
      id: 9,
      name: "நாராயணசாமி நாயுடு ",
      image: img9,
      desc: `நாராயணசாமி நாயுடு (திசம்பர் 6, 1925 - திசம்பர் 20, 1984) தமிழக உழவர் இயக்கத்தின் (தமிழக விவசாயிகள் சங்கம்) நிறுவனர் மற்றும் தலைவர்...`
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-10 bg-gradient-to-b from-[#fff8f1] via-[#ffe7d2] to-[#fff8f1] overflow-hidden" // FIXED: Added overflow-hidden
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#d9534f]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        வரலாற்று சிறப்புமிக்க தலைவர்கள்
      </motion.h1>

      {/* Main Layout */}
      <div className="flex flex-col space-y-20"> {/* Reduced space */}
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.id}
            className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Leader Image */}
            <motion.div
              className="md:w-1/2 w-full flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(leader)}
            >
              {/* FIXED: Responsive image size */}
              <img
                src={leader.image}
                alt={leader.name}
                className="rounded-3xl shadow-xl border-4 border-[#ffd3c2] object-cover object-top w-full max-w-[350px] h-[350px] sm:max-w-[400px] sm:h-[400px]"
              />
              <h2 className="text-2xl font-bold mt-4 text-[#e65e10ff]">{leader.name}</h2>
            </motion.div>

            {/* Short Desc */}
            {/* FIXED: Removed fixed height 'h-[280px]', added 'min-h-[250px]' and flex */}
            <div className="md:w-[60%] w-full bg-white/80 p-6 sm:p-8 rounded-3xl shadow-lg border border-[#ffe2c9] text-justify min-h-[250px] flex flex-col justify-center">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                {leader.desc.slice(0, 300)}...
              </p>
              <button
                onClick={() => setSelected(leader)}
                className="mt-4 text-[#e65e10ff] font-semibold underline hover:text-[#b84b0e] self-start" // Aligned button left
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Full View */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4" // Added padding
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)} // Click background to close
          >
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl max-w-4xl w-full text-center overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              transition={{ duration: 0.4 }} // Faster transition
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
            >
              {/* FIXED: Sticky close button */}
              <button
                onClick={() => setSelected(null)}
                className="sticky top-0 left-full -translate-x-full z-10 text-gray-600 hover:text-red-500 transition text-4xl font-bold bg-white/50 rounded-full px-3"
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-48 h-48 sm:w-72 sm:h-72 object-cover object-top rounded-3xl mx-auto border-4 border-[#eb3300] shadow-xl -mt-10" // Responsive size, adjusted margin
              />
              <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-[#d9534f]">{selected.name}</h2>

              <p className="text-gray-700 text-base sm:text-lg mt-5 text-justify leading-relaxed whitespace-pre-line">
                {selected.desc}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 bg-[#e65e10ff] text-white px-6 py-2 rounded-full hover:bg-[#b84b0e] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SuccessGallery;