import React, { useState } from "react";
import img1 from "../assets/gal-1.jpg";
import img2 from "../assets/gal-2.jpg";
import img3 from "../assets/gal-4.jpg";
import img4 from "../assets/gal-5.jpg";
import img5 from "../assets/gal-7.jfif";
import img6 from "../assets/gal-8.jfif";
import img7 from "../assets/gal-3.jpg";
import img8 from "../assets/gal-6.jpg";
import img9 from "../assets/gal-11.jpg";
import img10 from "../assets/gal-12.jpg";
import img11 from "../assets/gal-13.jpg";
import img12 from "../assets/gal-14.jpg";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8); // Increased initial count
  const galleryItems = [
    { id: 1, title: "நிகழ்வுகள் - 1", image: img9 },
    { id: 2, title: "நிகழ்வுகள் - 2", image: img10 },
    { id: 3, title: "நிகழ்வுகள் - 3", image: img11 },
    { id: 4, title: "நிகழ்வுகள் - 4", image: img12 },
    { id: 5, title: "நிகழ்வுகள் - 5", image: img5 },
    { id: 6, title: "நிகழ்வுகள் - 6", image: img6 },
    { id: 7, title: "நிகழ்வுகள் - 7", image: img7 },
    { id: 8, title: "நிகழ்வுகள் - 8", image: img8 },
    { id: 9, title: "நிகழ்வுகள் - 9", image: img1 },
    { id: 10, title: "நிகழ்வுகள் - 10", image: img2 },
    { id: 11, title: "நிகழ்வுகள் - 11", image: img3 },
    { id: 12, title: "நிகழ்வுகள் - 12", image: img4 },
    { id: 13, title: "நிகழ்வுகள் - 13", image: img5 },
    { id: 14, title: "நிகழ்வுகள் - 14", image: img6 },
    { id: 15, title: "நிகழ்வுகள் - 15", image: img7 },
    { id: 16, title: "நிகழ்வுகள் - 16", image: img8 },
  ];

  const openModal = (item) => {
    setSelectedImage(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, galleryItems.length)); // Load more
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#ffe5e5] via-[#fff0f0] to-[#ffcccc] overflow-hidden px-4 sm:px-6"> {/* Responsive padding */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto my-5 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Gallery</h2> {/* Responsive text */}
          <p className="text-gray-600 text-base sm:text-lg"> {/* Responsive text */}
            Moments captured from our community service and tamizhaga Naidu Kootamaipu Arakattalai.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"> {/* Adjusted grid */}
          {galleryItems.slice(0, visibleCount).map((item) => (
            <GalleryCard key={item.id} item={item} openModal={openModal} />
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < galleryItems.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleSeeMore}
              className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              See More
            </button>
          </div>
        )}

        {/* Modal */}
        {modalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
            onClick={closeModal}
          >
            <div
              className={`relative max-w-3xl w-full bg-white rounded-lg overflow-hidden transform transition-all duration-300 ${modalOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-red-200 text-red-500 rounded-full shadow-lg transition-all duration-300 text-2xl font-bold hover:bg-red-300 hover:text-red-600"
                onClick={closeModal}
                aria-label="Close Modal"
              >
                &times;
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const GalleryCard = ({ item, openModal }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm cursor-pointer transform hover:scale-105 transition duration-300" // Added shadow
      onClick={() => openModal(item)}
    >
      <div className="relative w-full aspect-square"> {/* Use aspect-square for uniform size */}
        {!loaded && (
          <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse">
          </div>
        )}
        <img
          src={item.image}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
            }`}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

export default Gallery;