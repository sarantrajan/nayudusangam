import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
<section className="pt-16 pb-16 bg-gradient-to-br from-[#ffe5e5] via-[#fff0f0] to-[#ffcccc] justify-items-center">
      {/* 🔹 Floating Gradient Box */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10 rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        style={{
          background:
            "linear-gradient(270deg, #b30000, #ff4d4d, #ff6666, #d10000)",
          backgroundSize: "300% 300%",
          animation: "gradientFlow 10s ease infinite",
        }}
      >
        {/* 🔸 Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 text-white flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-yellow-300 leading-snug">
              தமிழக நாயுடு கூட்டமைப்பு <br />
              <span className="text-white text-2xl block mt-1 text-center">அறக்கட்டளை</span>
            </h2>

            <p className="text-gray-100 text-lg mt-3">
              அரசு பதிவு பெற்றது. பதிவு எண் :{" "}
              <span className="font-semibold text-white">195/2025</span>
            </p>

            <div className="space-y-3 text-gray-100 mt-5">
              <p className="flex items-start gap-2">
                <MapPin className="text-yellow-300 w-6 h-6 mt-1" />
                <span>
                  எண்: 209, நேதாஜி ரோடு, <br />
                  Madurai, Tamil Nadu 625 001
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-yellow-300 w-5 h-5" /> +91 94427 15440
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-yellow-300 w-5 h-5" />{" "}
                tamizhaganaidukoottamaippu@gmail.com
              </p>
            </div>
          </div>

          {/* 🌍 Map Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3 text-yellow-300">
              Our Location
            </h2>
            <div className="w-full h-90 rounded-xl overflow-hidden shadow-lg border border-white/30">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.385672632513!2d78.11417655487249!3d9.917891963586978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5813dad3275%3A0x5485900c4aef444f!2sNo%20209%2C%20Nethaji%20Rd%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu%20625001!5e0!3m2!1sen!2sin!4v1761801815071!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* ✉️ Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-xl text-white p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold mb-5 text-center text-yellow-200">
            Send Us a Message
          </h2>
          <form className="space-y-5">
            {["Name", "Email", "Phone"].map((label, i) => (
              <div key={i}>
                <label className="block text-sm font-medium mb-2">
                  {label}
                </label>
                <input
                  type={label === "Email" ? "email" : "text"}
                  required={label !== "Phone"}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Type your message"
                className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full font-medium hover:from-white hover:to-yellow-200 transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* 🔁 Animated Gradient */}
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
