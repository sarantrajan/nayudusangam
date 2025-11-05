import { useState, useEffect } from "react";
import { Upload, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import logo2 from "../assets/logo-2.png";

export default function JoinUs() {
  const [photo, setPhoto] = useState(null);

  const getNextId = () => {
    const lastId = localStorage.getItem("lastMemberId");
    return lastId ? parseInt(lastId) + 1 : 1;
  };

  const [formData, setFormData] = useState({
    id: `NS${getNextId()}`,
    name: "",
    fatherName: "",
    age: "",
    dob: "",
    district: "",
    state: "",
    city: "",
    mobile: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload a photo.");
      return;
    }
    setSubmitted(true);
    const currentIdNumber = parseInt(formData.id.replace("NS", ""));
    localStorage.setItem("lastMemberId", currentIdNumber);
  };

  const handleDownloadPDF = () => {
    const element = document.querySelector(".id-card-landscape");
    if (!element) {
      alert("ID card element not found!");
      return;
    }

    // FIXED: PDF size 'pt' la irunthu 'px' ku maathiyachu
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    const opt = {
      margin: 0,
      filename: `${formData.name || "User"}_NaiduSangam_ID.pdf`,
      image: { type: "png", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "px", // 'pt' illama 'px' use pannurom
        format: [width, height],
        orientation: width > height ? "landscape" : "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden"> {/* FIXED: Overflow add panniyachu */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-16 mt-[72px] sm:mt-[80px] transition-all duration-700"> {/* FIXED: Navbar height */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3"> {/* Responsive text */}
            {submitted
              ? "தமிழக நாயுடு கூட்டமைப்பில் இணைந்ததற்கு நன்றி!! 🙏"
              : "தமிழக நாயுடு கூட்டமைப்பில் இணையவும்"}
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            {submitted
              ? "உங்கள் உறுப்பினர் அட்டையை கீழே பதிவிறக்கம் செய்யலாம்."
              : "கீழே உள்ள படிவத்தை நிரப்பி உறுப்பினராக இணையவும்"}
          </p>
        </div>
      </section>

      {/* Form / Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {!submitted ? (
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-200"> {/* Responsive padding */}
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                உறுப்பினர் விண்ணப்பம்
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields appadiye irukkattum */}
                {[
                  { label: "Full Name *", name: "name", type: "text" },
                  { label: "Father’s Name *", name: "fatherName", type: "text" },
                  { label: "Age *", name: "age", type: "number" },
                  { label: "Date of Birth *", name: "dob", type: "date" },
                  { label: "District *", name: "district", type: "text" },
                  { label: "State *", name: "state", type: "text" },
                  { label: "City *", name: "city", type: "text" },
                  { label: "Mobile Number *", name: "mobile", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-700 font-medium mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.name]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.name]: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none" // Increased padding
                    />
                  </div>
                ))}
                {/* Photo Upload */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Upload Photo *
                  </label>
                  <label
                    htmlFor="photo"
                    className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-400 rounded-lg p-6 cursor-pointer hover:border-orange-500 transition"
                  >
                    <Upload className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {photo ? "Change Photo" : "Click to upload photo"}
                    </span>
                  </label>
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    required
                    className="hidden"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Submit Application
                </button>
              </form>
            </div>
          ) : (
            // ID Card Display
            <div className="text-center">
              <h2 className="text-red-700 font-bold mb-4 text-2xl sm:text-3xl"> {/* Responsive text */}
                நாயுடு கூட்டமைப்பு உறுப்பினர் அட்டை
              </h2>

              {/* FIXED: Responsive ID Card */}
              <motion.div
                initial={{ rotateY: 60, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{
                  boxShadow:
                    "0 20px 40px rgba(255, 0, 0, 0.5), 0 0 50px rgba(255, 165, 0, 0.4)",
                }}
                className="id-card-landscape mx-auto bg-gradient-to-br from-white to-orange-100 shadow-2xl rounded-xl overflow-hidden border-4 border-red-600 transform perspective-1000 w-full max-w-[600px] h-auto" // Fixed width neekiyachu
                // style prop removed
              >
                {/* Header (Responsive) */}
                <div className="flex items-center justify-start bg-red-700 text-white p-3 sm:p-4">
                  <img
                    src={logo2}
                    alt="Logo-2"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain bg-white rounded-full mr-3 sm:mr-4 p-1 shadow-lg" // Responsive size
                  />
                  <div>
                    <h5 className="text-base sm:text-lg font-bold leading-tight text-left"> {/* Responsive text */}
                      தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை<br /> (மதுரை)
                    </h5>
                  </div>
                </div>

                {/* Body (Responsive) */}
                <div className="flex flex-col sm:flex-row p-4 sm:p-5"> {/* flex-col on mobile */}
                  <div className="w-full sm:w-1/3 flex flex-col items-center justify-start mb-4 sm:mb-0"> {/* Mobile layout */}
                    {photo && (
                      <img
                        src={photo}
                        alt="Member"
                        className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg border-4 border-red-500 shadow-md" // Responsive size
                      />
                    )}
                    <p className="mt-3 font-bold text-gray-700 text-sm">
                      ID: {formData.id}
                    </p>
                  </div>

                  <div className="w-full sm:w-2/3 text-left sm:pl-5 space-y-2 text-gray-800 text-sm"> {/* Mobile layout */}
                    <p>
                      <span className="font-semibold">பெயர்:</span> {formData.name}
                    </p>
                    <p>
                      <span className="font-semibold">தந்தையின் பெயர்:</span>{" "}
                      {formData.fatherName}
                    </p>
                    <p>
                      <span className="font-semibold">வயது:</span> {formData.age}
                    </p>
                    <p>
                      <span className="font-semibold">பிறந்த தேதி:</span>{" "}
                      {formData.dob}
                    </p>
                    <p>
                      <span className="font-semibold">மாவட்டம்:</span> {formData.district}
                    </p>
                    <p>
                      <span className="font-semibold">மாநிலம்:</span> {formData.state}
                    </p>
                    <p>
                      <span className="font-semibold">ஊர்:</span> {formData.city}
                    </p>
                    <p>
                      <span className="font-semibold">மொபைல்:</span> {formData.mobile}
                    </p>
                  </div>
                </div>

                {/* Footer (Responsive) */}
                <div className="bg-red-700 text-white text-center py-2 text-xs sm:text-sm font-semibold"> {/* Responsive text */}
                  © 2025 Naidu Sangam - உறுப்பினர் சான்று
                </div>
              </motion.div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadPDF}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition mt-8 shadow-lg" // Increased margin
              >
                <Download className="inline-block mr-2 w-5 h-5" />
                ID அட்டை பதிவிறக்கம்
              </motion.button>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-200 py-8 mt-12 text-center">
        <p>© 2025 Naidu Sangam. All rights reserved.</p>
      </footer>
    </div>
  );
}