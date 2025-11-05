import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const siteLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-6 py-12"> {/* Responsive padding */}
        {/* FIXED: Added text-center md:text-left to all columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10"> {/* Increased gap */}
          
          {/* About Us */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-sm leading-relaxed text-gray-300"> {/* Lighter text */}
              Tamizhaga Naidu Koottamaippu Foundation was established in{" "}
              <span className="text-red-500 font-semibold">2025</span> to unite
              and uplift the Naidu community. We work for education, employment,
              and social growth while preserving our culture and traditions.
            </p>
            {/* Social Icons (Center on mobile, left on desktop) */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 hover:opacity-80 transition"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 hover:opacity-80 transition"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gradient-to-tr from-pink-600 to-orange-400 hover:opacity-80 transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Site Links */}
          {/* FIXED: Removed 'relative left-12'. Added 'items-center md:items-start' */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold mb-6 text-white">Site Links</h2>
            <ul className="flex flex-col space-y-3"> {/* Removed items-center md:items-start */}
              {siteLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition" // Lighter text
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {/* FIXED: Removed 'relative right-15'. Added 'items-center md:items-start' */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold mb-6 text-white">
              Have a Question?
            </h2>
            <ul className="space-y-4 text-sm text-gray-300"> {/* Increased space, Lighter text */}
              <li className="flex items-start max-w-xs mx-auto md:mx-0"> {/* Constrain width on mobile */}
                <MapPin className="w-5 h-5 mr-3 mt-1 text-red-500 flex-shrink-0" />
                <span>No: 209, Nethaji Road, Madurai, Tamil Nadu – 625001</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" />
                <a
                  href="tel:+919942715440"
                  className="hover:text-white transition"
                >
                  +91 99427 15440
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="text-red-500 mr-3 text-lg flex-shrink-0">📧</span>
                <a
                  href="mailto:tamizhaganaidukoottamaippu@gmail.com"
                  className="hover:text-white transition break-all" // Allow email to break
                >
                  tamizhaganaidukoottamaippu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-white">Our Location</h2>
            <div className="w-full h-52 rounded-xl overflow-hidden shadow-lg border border-white/20 max-w-xs mx-auto md:max-w-none"> {/* Max width on mobile */}
              <iframe
                title="Google Map"
                src="http://googleusercontent.com/maps/google.com/0"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-6"> {/* Increased padding */}
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை
            </span>
            . All rights reserved | Created by{" "}
            <span className="font-medium text-white hover:text-gray-400 transition">
              Sharpendmind Tech & Solutions Pvt
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}