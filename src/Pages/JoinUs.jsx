import { useState, useEffect } from "react";
import { Upload, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "../Components/Navbar";
import logo2 from "../assets/logo-2.png";

export default function JoinUs() {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoBase64, setPhotoBase64] = useState(null);

  const getNextId = () => {
    const lastId = localStorage.getItem("lastMemberId");
    return lastId ? parseInt(lastId) + 1 : 1;
  };

  const [formData, setFormData] = useState({
    id: `TNK${getNextId()}`,
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

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
      setPhotoPreview(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = () => setPhotoBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photoPreview) {
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

    // Wait until the image is ready
    if (!photoBase64) {
      alert("Photo still loading. Please wait a second and try again.");
      return;
    }

    html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // Safe background
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${formData.name || "User"}_NaiduSangam_ID.pdf`);
    });
  };


  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />

      {/* ✅ FIXED: Replaced Tailwind gradient with hex-based linear-gradient */}
      <section
        style={{
          background: "linear-gradient(to right, #b91c1c, #ea580c)",
        }}
        className="text-white py-16 mt-[72px] sm:mt-[80px] transition-all duration-700"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
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

      <section className="py-12">
        <div className="container mx-auto px-4">
          {!submitted ? (
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-200">
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
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
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
                      {photoPreview ? "Change Photo" : "Click to upload photo"}
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
              <h2 className="text-red-700 font-bold mb-4 text-2xl sm:text-3xl">
                நாயுடு கூட்டமைப்பு உறுப்பினர் அட்டை
              </h2>

              <div
                className="id-card-landscape mx-auto shadow-2xl rounded-xl overflow-hidden w-full max-w-[600px] h-auto"
                style={{
                  background: "linear-gradient(to bottom right, #ffffff, #ffedd5)",
                  border: "4px solid #b91c1c",
                  color: "#1f2937",
                }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-start p-3 sm:p-4"
                  style={{ backgroundColor: "#b91c1c", color: "#ffffff" }}
                >
                  <img
                    src={logo2}
                    alt="Logo-2"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      padding: "4px",
                      marginRight: "0.75rem",
                      objectFit: "contain",
                    }}
                  />
                  <div>
                    <h5 style={{ fontSize: "1rem", fontWeight: "bold", lineHeight: "1.3" }}>
                      தமிழக நாயுடு கூட்டமைப்பு அறக்கட்டளை<br /> (மதுரை)
                    </h5>
                  </div>
                </div>

                {/* Body */}
                <div
                  className="flex flex-col sm:flex-row p-4 sm:p-5"
                  style={{ color: "#1f2937" }}
                >
                  <div
                    className="w-full sm:w-1/3 flex flex-col items-center justify-start mb-4 sm:mb-0"
                  >
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Member"
                        style={{
                          width: "8rem",
                          height: "8rem",
                          objectFit: "cover",
                          borderRadius: "0.5rem",
                          border: "4px solid #b91c1c",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                      />
                    )}
                    <p
                      style={{
                        marginTop: "0.75rem",
                        fontWeight: "bold",
                        color: "#374151",
                        fontSize: "0.9rem",
                      }}
                    >
                      ID: {formData.id}
                    </p>
                  </div>

                  <div
                    className="w-full sm:w-2/3 text-left sm:pl-5 space-y-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <p><strong>பெயர்:</strong> {formData.name}</p>
                    <p><strong>தந்தையின் பெயர்:</strong> {formData.fatherName}</p>
                    <p><strong>வயது:</strong> {formData.age}</p>
                    <p><strong>பிறந்த தேதி:</strong> {formData.dob}</p>
                    <p><strong>மாவட்டம்:</strong> {formData.district}</p>
                    <p><strong>மாநிலம்:</strong> {formData.state}</p>
                    <p><strong>ஊர்:</strong> {formData.city}</p>
                    <p><strong>மொபைல்:</strong> {formData.mobile}</p>
                  </div>
                </div>

                {/* Footer */}
                <div
                  style={{
                    backgroundColor: "#b91c1c",
                    color: "#ffffff",
                    textAlign: "center",
                    padding: "8px",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                  }}
                >
                  © 2025 Naidu Sangam - உறுப்பினர் சான்று
                </div>
              </div>


              <button
                onClick={handleDownloadPDF}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition mt-8 shadow-lg hover:scale-105 active:scale-95"
              >
                <Download className="inline-block mr-2 w-5 h-5" />
                ID அட்டை பதிவிறக்கம்
              </button>
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
