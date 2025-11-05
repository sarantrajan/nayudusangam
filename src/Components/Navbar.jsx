import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; //

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // FIXED: Alignment issue
      className="fixed top-0 left-0 w-full z-50"
    >
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div
        className={`
          flex items-center justify-between px-4 py-3 md:px-6
          w-full shadow-lg transition-all duration-500 text-white
          ${scrolled ? "backdrop-blur-md" : ""}
        `}
        style={{
          background:
            "linear-gradient(270deg, #b30000, #ff3300, #ff6600, #cc0000)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 8s ease infinite",
        }}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src={logo}
            alt="Welfare Logo"
            className="h-12 w-12 sm:h-14 md:h-16 rounded-full bg-white p-1 shadow-md object-contain" // Adjusted size
          />
          {/* FIXED: Text theriyanum (hidden class neekiyachu) + Responsive size */}
          <span className="text-base sm:text-xl md:text-2xl font-bold">
            தமிழக நாயுடு கூட்டமைப்பு
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 transition hover:text-yellow-300"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />} {/* Size adjusted */}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg xl:text-xl 
                 hover:text-yellow-300 transition 
                 ${isActive ? "text-yellow-200 font-semibold" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* Join Us Button */}
          <Link
            to="/joinus"
            className="ml-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 
                       text-white font-semibold px-5 py-2.5 rounded-full shadow-lg 
                       hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Smooth animation
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Faster
            className={`lg:hidden rounded-b-lg shadow-lg p-4 space-y-3
              ${scrolled ? "bg-white/80 text-black backdrop-blur-md" : "bg-white/90 text-black backdrop-blur-md"}`}
            style={{ transformOrigin: "top" }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg py-2 px-3 rounded-md hover:bg-gray-200 transition ${
                    isActive ? "text-red-700 font-semibold bg-gray-100" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/joinus"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#b30000] text-white font-semibold px-4 py-3 rounded-lg hover:bg-red-700 transition text-lg" // Adjusted size
            >
              Join Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}