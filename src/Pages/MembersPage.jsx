import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Path correct ah nu paarunga
import Footer from "../components/Footer"; // Path correct ah nu paarunga
import TeamSection from "../components/TeamSection"; // 'About' page la irunthu import pannikonga
import aboutimg from "../assets/about.webp"; // 'About' page la iruntha image ah use panren

// --- MUKKIYAM: ITHU DUMMY DATA ---
// Neenga unga database setup pannathum, intha array thevai illai.
// Athuku pathila database la irunthu data va fetch pannanum.
const dummyNewMembers = [
  {
    id: "NS8371",
    name: "Suresh Kumar",
    city: "Chennai",
    photo: "https://via.placeholder.com/150/FF0000/FFFFFF?text=SK", // Sample image
  },
  {
    id: "NS9234",
    name: "Priya Murugan",
    city: "Coimbatore",
    photo: "https://via.placeholder.com/150/0000FF/FFFFFF?text=PM", // Sample image
  },
  {
    id: "NS5512",
    name: "Ravi Chandran",
    city: "Tirunelveli",
    photo: "https://via.placeholder.com/150/008000/FFFFFF?text=RC", // Sample image
  },
];
// ------------------------------------

export default function MembersPage() {
  const [newMembers, setNewMembers] = useState([]);

  // Intha useEffect, page load aanathum 'dummy data' va state la set pannuthu.
  // Neenga database use pannumbothu, inga thaan fetch() logic varum.
  useEffect(() => {
    // TODO: Unga database la irunthu data va fetch panni inga set pannanum
    setNewMembers(dummyNewMembers);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section (About page la iruntha maathiri) */}
      <div
        className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center p-4 sm:p-6 md:p-8"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white">
          <h1 className="text-1xl sm:text-3xl md:text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
            우리 회원들 (Our Members)
          </h1>
        </div>
      </div>

      {/* --- Section 1: State Members (About page la irunthu) --- */}
      <TeamSection />

      {/* --- Section 2: New Members (JoinUs form la irunthu) --- */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700">
              புதிய உறுப்பினர்கள்
            </h2>
            <p className="text-gray-600 mt-2">
              கூட்டமைப்பில் புதிதாக இணைந்த உறுப்பினர்கள் பட்டியல்
            </p>
          </div>

          {/* New Members List Grid */}
          {newMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {newMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 mt-1">{member.city}</p>
                    <p className="text-sm font-medium text-red-600 mt-2">
                      ID: {member.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              புதிய உறுப்பினர்கள் யாரும் இல்லை.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}