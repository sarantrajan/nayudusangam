import { useState, useEffect } from "react";
import { Upload, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import logo2 from "../assets/logo-2.png";

export default function JoinUs() {
  const [photo, setPhoto] = useState(null);

  // Get last saved ID from localStorage or start from 0
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
    setSubmitted(true);

    // Save the last member ID in localStorage for next time
    const currentIdNumber = parseInt(formData.id.replace("NS", ""));
    localStorage.setItem("lastMemberId", currentIdNumber);
  };

  const handleDownloadPDF = () => {
    const element = document.querySelector(".id-card-landscape");

    if (!element) {
      alert("ID card element not found!");
      return;
    }

    const width = element.offsetWidth;
    const height = element.offsetHeight;

    const opt = {
      margin: 0,
      filename: `${formData.name || "User"}_NaiduSangam_ID.pdf`,
      image: { type: "png", quality: 1 },
      html2canvas: {
        scale: 2, // higher = better quality
        useCORS: true, // fixes image rendering issues
      },
      jsPDF: {
        unit: "pt",
        format: [width, height],
        orientation: width > height ? "landscape" : "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-16 mt-16 transition-all duration-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-3">
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
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                உறுப்பினர் விண்ணப்பம்
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                ))}

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

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Submit Application
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-red-700 font-bold mb-4">
                நாயுடு கூட்டமைப்பு உறுப்பினர் அட்டை
              </h2>

              {/* 3D Animated ID Card */}
              <motion.div
                initial={{ rotateY: 60, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{
                  boxShadow:
                    "0 20px 40px rgba(255, 0, 0, 0.5), 0 0 50px rgba(255, 165, 0, 0.4)",
                }}
                className="id-card-landscape mx-auto bg-gradient-to-br from-white to-orange-100 shadow-2xl rounded-xl overflow-hidden border-4 border-red-600 transform perspective-1000"
                style={{
                  width: "600px",
                  height: "400px",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-start bg-red-700 text-white p-4">
                  <img
                    src={logo2}
                    alt="Logo-2"
                    className="w-16 h-16 object-contain bg-white rounded-full mr-4 p-1 shadow-lg"
                  />
                  <div>
                    <h5 className="text-lg font-bold leading-tight">
                      தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை<br /> (மதுரை)
                    </h5>
                  </div>
                </div>

                {/* Body */}
                <div className="flex p-5">
                  <div className="w-1/3 flex flex-col items-center justify-start">
                    {photo && (
                      <img
                        src={photo}
                        alt="Member"
                        className="w-32 h-32 object-cover rounded-lg border-4 border-red-500 shadow-md"
                      />
                    )}
                    <p className="mt-3 font-bold text-gray-700 text-sm">
                      ID: {formData.id}
                    </p>
                  </div>

                  <div className="w-2/3 text-left pl-5 space-y-2 text-gray-800 text-sm">
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

                {/* Footer */}
                <div className="bg-red-700 text-white text-center py-2 text-sm font-semibold">
                  © 2025 Naidu Sangam - உறுப்பினர் சான்று
                </div>
              </motion.div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadPDF}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition mt-6 shadow-lg"
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
