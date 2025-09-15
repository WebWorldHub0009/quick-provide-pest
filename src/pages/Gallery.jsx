// src/components/Showcase.jsx
import React, { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/showcase/s1.jpg";
import img2 from "../assets/showcase/s2.jpg";
import img3 from "../assets/showcase/s3.jpg";
import img4 from "../assets/showcase/s4.jpg";
import img5 from "../assets/showcase/s5.jpg";
import img6 from "../assets/showcase/s6.jpg";
import img7 from "../assets/showcase/s7.jpg";
import img8 from "../assets/showcase/s8.jpg";
import img9 from "../assets/showcase/s9.jpg";
import img10 from "../assets/showcase/s10.jpg";

// Example videos
import vid1 from "../assets/showcase/v1.mp4";
import vid2 from "../assets/showcase/v2.mp4";
import vid3 from "../assets/showcase/v3.mp4";

import ShowcaseHero from "../components/ShowcaseHero";

// Media array (first 3 are videos, rest are images)
const media = [
  { type: "video", src: vid1 },
  { type: "video", src: vid2 },
  { type: "video", src: vid3 },
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "image", src: img10 },
//   { type: "image", src: img2 },
];

// Grid spans for responsive layout
const gridStyles = [
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-3 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-4 sm:row-span-1",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openMedia = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevMedia = () => {
    setSelectedIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const nextMedia = () => {
    setSelectedIndex((prev) => (prev + 1) % media.length);
  };

  return (
    <>
      {/* Hero */}
      <ShowcaseHero />

      {/* Gallery Section */}
      <section id="gallery-section" className="bg-white px-4 md:px-10 py-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-[#3CB371] to-[#FFD700] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Explore how{" "}
            <span className="font-semibold text-[#3CB371]">
              Quick Provide Pest Control
            </span>{" "}
            protects your homes and businesses with eco-friendly methods,
            expert care, and reliable service to ensure a safe and healthy
            environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          id="gallery"
          className="grid grid-cols-1 sm:grid-cols-6 auto-rows-[220px] sm:auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[250px] gap-4"
        >
          {media.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer border border-gray-200 hover:border-[#3CB371] shadow-md hover:shadow-lg transition-all duration-300 group col-span-1 ${gridStyles[i]}`}
              onClick={() => openMedia(i)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  loop
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-50 flex items-center justify-center transition duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 backdrop-blur-md bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {media[selectedIndex].type === "image" ? (
                <img
                  src={media[selectedIndex].src}
                  alt="Enlarged"
                  className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <video
                  src={media[selectedIndex].src}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
              )}

              {/* Close */}
              <button
                className="absolute top-3 right-3 text-white text-xl bg-[#3CB371]/80 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#3CB371] hover:to-[#FFD700] transition"
                onClick={closeModal}
                aria-label="Close gallery modal"
              >
                <FaTimes />
              </button>

              {/* Prev */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-[#3CB371]/70 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#3CB371] hover:to-[#FFD700] transition"
                onClick={prevMedia}
                aria-label="Previous media"
              >
                <FaArrowLeft />
              </button>

              {/* Next */}
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl bg-[#3CB371]/70 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#3CB371] hover:to-[#FFD700] transition"
                onClick={nextMedia}
                aria-label="Next media"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
