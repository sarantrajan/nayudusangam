import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jfif";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jfif";
import team6 from "../assets/team6.jfif";
import team7 from "../assets/team7.jfif";
import team17 from "../assets/team17.jfif";
import team8 from "../assets/mag-1.jfif";
import team9 from "../assets/mag-2.jfif";
import team10 from "../assets/mag-3.jfif";
import team11 from "../assets/mag-4.jfif";
import team13 from "../assets/mag-6.jfif";
import team14 from "../assets/mag-5.jfif";
import team15 from "../assets/mag-7.jfif";
import team16 from "../assets/mag-8.jfif";

// ... (Team data appadiye irukkattum)
const stateTeam = [
  { name: "மு.முத்துராஜ் நாயுடு, MBA", role: "தலைவர்", contact: "94427 15440", img: team1 },
  { name: "V.கோபால்சாமி நாயுடு  SM IOB (Rtd)", role: "துணைத் தலைவர்", contact: "87785 69800", img: team2 },
  { name: "V.நவநீத கிருஷ்ணன் நாயுடு", role: "செயலாளார்", contact: "99407 52252", img: team3 },
  { name: "S.ராதா கிருஷ்ணன் நாயுடு", role: "துணை செயலாளார்", contact: "70103 72245", img: team4 },
  { name: "V.ஸ்ரீதர் நாயுடு B.com.,BL", role: "பொருளாளர்", contact: "91504 66649", img: team5 },
];
const districtTeam = [
  { name: "B .சௌந்தரராஜன் நாயுடு Teacher(Rtd)", role: "நிர்வாகக்குழு உறுப்பினர்", contact: "94421 67743", img: team6 },
  { name: "KVS.சுப்பிரமணியன் நாயுடு", role: "நிர்வாகக்குழு உறுப்பினர்", contact: "94866 90386", img: team7 },
  { name: "R.தாமோதரன் நாயுடு", role: "நிர்வாகக்குழு உறுப்பினர்", contact: "89036 90843", img: team17 },
];
const womenTeam = [
  { name: "D.சுந்தரேஸ்வரி", role: "தலைவி", img: team8 },
  { name: "M.ராம பிரபா", role: "துணைத் தலைவி", img: team9 },
  { name: "P.வாசுகி", role: "செயலாளர்", img: team10 },
  { name: "முத்துலட்சுமி", role: "துணைச் செயலாளர்", img: team11 },
  { name: "M.கலா தேவி", role: "பொருளாளர்", img: team16 },
];
const womenDistrictTeam = [
  { name: "V.மாரிச்செல்வி", role: "நிர்வாகக்குழு உறுப்பினர்", img: team13 },
  { name: "N.பாண்டியம்மாள்", role: "நிர்வாகக்குழு உறுப்பினர்", img: team14 },
  { name: "R.இந்திரா", role: "நிர்வாகக்குழு உறுப்பினர்", img: team15 },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, ease: "easeOut" },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function TeamSection() {
  const renderTeam = (team, useFlex = false, showContact = true) => {
    // FIXED: Responsive grid, removed 'useFlex' logic for main layout
    const layoutClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center";

    // Use Flex only for the smaller district teams if specified
    if (useFlex) {
      return (
         <motion.div
          className="flex justify-center gap-6 flex-wrap" // Use flex for specific sections
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} showContact={showContact} />
          ))}
        </motion.div>
      )
    }

    return (
      <motion.div
        className={layoutClass}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {team.map((member, index) => (
           <TeamMemberCard key={index} member={member} showContact={showContact} />
        ))}
      </motion.div>
    );
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 overflow-hidden" // FIXED: Added overflow-hidden
      style={{
        background: "linear-gradient(120deg, #fff5f5, #ffeaea, #fffafa)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center space-y-16"> {/* Reduced space */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#b30000] mb-12 drop-shadow-sm"
        >
          கழகத்தின் மாநில நிர்வாகிகள்
        </motion.h2>

        {renderTeam(stateTeam, false)} {/* Use grid */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#800000] mt-16 mb-12" // Adjusted margin
        >
          மாநில நிர்வாகக்குழு உறுப்பினர்கள்
        </motion.h2>
        {renderTeam(districtTeam, true)} {/* Use flex */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#b30047] mt-16 mb-12"
        >
          கழகத்தின் மாநில நிர்வாகிகள் (மகளிர் அணி)
        </motion.h2>
        {renderTeam(womenTeam, false, false)} {/* Use grid */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#d63384] mt-16 mb-12"
        >
          மாநில நிர்வாகக்குழு உறுப்பினர்கள் (மகளிர் அணி)
        </motion.h2>
        {renderTeam(womenDistrictTeam, true, false)} {/* Use flex */}
      </div>
    </section>
  );
}

// Helper Component for Team Member Card
const TeamMemberCard = ({ member, showContact }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      scale: 1.07,
      y: -10,
      boxShadow: "0 10px 30px rgba(255, 77, 77, 0.4)",
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
    // FIXED: Removed fixed width 'w-[250px]', added 'w-full max-w-xs mx-auto'
    className="p-6 rounded-2xl shadow-lg border border-red-100 backdrop-blur-sm 
               bg-gradient-to-br from-[#fff0f0] via-[#ffeaea] to-[#ffd6d6]
               hover:from-[#ffe5e5] hover:to-[#ffcccc]
               flex flex-col items-center justify-between text-center min-h-[320px] w-full max-w-xs mx-auto"
  >
    <motion.img
      src={member.img}
      alt={member.name}
      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#ff4d4d]"
      loading="lazy"
      whileHover={{ scale: 1.1, rotate: 2 }}
    />
    <div className="flex flex-col justify-center items-center flex-grow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
      <p className="text-gray-600 mb-2">{member.role}</p>
      {showContact && member.contact && (
        <p className="text-[#b30000] font-medium flex items-center justify-center gap-1 text-sm sm:text-base"> {/* Responsive text */}
          📞{" "}
          <a
            href={`tel:${member.contact.replace(/\s/g, "")}`}
            className="hover:underline"
          >
            {member.contact}
          </a>
        </p>
      )}
    </div>
  </motion.div>
);