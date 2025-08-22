"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBaupHyOzgQ901OfgmfiLPtIdxNziGDPtc-nGM7HHREE7ddUsb9rsr4QHbFp0KC7CHGZofO9b_EpVbtkyCTlB-t0KY1XVI1ZXQVIBtE6ExhxKxAnTY7oreoiMcT4OuRw0DPnhJmExwO1hVIFkWBgH3r7XDMm-0S60TMjg_mU1h08Gj7yu3dFqrBPMxULpsgh4Y56uNPKs0522xq2F4O9wbXZFm92NyohYUVTTstyhkyhDdrbh34AXFwfR5gsbpB4VODfgaVf0e8txs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFrDmKCXBMz-tKGDLNAsilki02ij4jy4Y7b-m2aLBADrpvdKPq3kOrjFZqAg0f4NIGjfv3gwftMGH_NbW9pTdEUpYPV1x1j_2a0h-5p8P6sudBpR7nZNx353ESYpvyUYuskRzD4Fz9j1KzM_nq8-_Pl1F21yfvolRJt5iCOvlLczDygo4fxRgGgv1a4PEvXGkSaMAQqlmHHTgL8jyXMes9hLuIC5mLeuPdI6W5wrcrn-A6Ye8FHACDrI1ofke2br6EMTW1Emgm0E",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOr4ZjocQE-6kZ1z_K88Czzm0uAdmuboHYzMzaOT2m3mirwvIdeZXtI6s3lcFDQC6HAqbxlPLSYqWdcRUfde_MUywbmhS5JjIaifo5-Gz8FdzOyYC1z3JRnCImC7SvUDZRP1P1U38-rI4_foywH0UQ1JkD_rvRNtpjwHoWhxxFPSJPyGV5hIGHFHUrHwMSo930sQa3f0zjLOzjX5ud5BwmoS7D2vzFFyjjjlyA2VQu0_AphuvVNc7rP7PRQZaSrmiKpZYrzDvOxdI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiFrDmKCXBMz-tKGDLNAsilki02ij4jy4Y7b-m2aLBADrpvdKPq3kOrjFZqAg0f4NIGjfv3gwftMGH_NbW9pTdEUpYPV1x1j_2a0h-5p8P6sudBpR7nZNx353ESYpvyUYuskRzD4Fz9j1KzM_nq8-_Pl1F21yfvolRJt5iCOvlLczDygo4fxRgGgv1a4PEvXGkSaMAQqlmHHTgL8jyXMes9hLuIC5mLeuPdI6W5wrcrn-A6Ye8FHACDrI1ofke2br6EMTW1Emgm0E",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOr4ZjocQE-6kZ1z_K88Czzm0uAdmuboHYzMzaOT2m3mirwvIdeZXtI6s3lcFDQC6HAqbxlPLSYqWdcRUfde_MUywbmhS5JjIaifo5-Gz8FdzOyYC1z3JRnCImC7SvUDZRP1P1U38-rI4_foywH0UQ1JkD_rvRNtpjwHoWhxxFPSJPyGV5hIGHFHUrHwMSo930sQa3f0zjLOzjX5ud5BwmoS7D2vzFFyjjjlyA2VQu0_AphuvVNc7rP7PRQZaSrmiKpZYrzDvOxdI",
];

const CollegeLife = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const openImage = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // filter functionality
  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((_, index) => index % 2 === 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-4xl md:text-5xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Campus Moments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the best moments from college life
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {["all", "highlights"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openImage(image)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="-translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-semibold">
                    Memory #{index + 1}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">Click to view</p>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                #{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl w-full max-h-screen">
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={closeImage}
            >
              &times;
            </button>

            {/* Image container */}
            <div className="animate-[zoomIn_0.3s_ease]">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] mx-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeLife;
