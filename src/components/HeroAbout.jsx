// src/components/HeroAbout.jsx
import React from "react";
import heroBg from "../assets/showcase/bg.jpg";
import { Link } from "react-router-dom";

export default function HeroAbout() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat h-[85vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay with Brand Gradient */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Watermark */}
      <h1 className="absolute text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-[#FFFFFF10] top-1/4 left-1/2 -translate-x-1/2 pointer-events-none uppercase tracking-[0.2em] italic">
        PEST FREE
      </h1>

      {/* Left Content */}
      <div className="absolute bottom-10 left-6 sm:left-16 max-w-md text-left z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[Poppins] text-white leading-tight drop-shadow-lg">
          Quick Provide Pest Control
        </h2>
        <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl font-[Poppins] leading-relaxed">
          Over <span className="font-bold text-red-600">10+ years</span> of
          excellence in pest management. Delivering safe, reliable, and
          eco-friendly pest control across Delhi.
        </p>
        <Link to="/services">
          <button className="mt-5 px-8 py-3 rounded-full bg-gradient-to-r from-[#E30613] to-[#1F2C73] text-white font-semibold font-[Poppins] shadow-lg hover:opacity-90 transition duration-300">
            Explore Our Services
          </button>
        </Link>
      </div>

      {/* Right Content */}
      <div className="absolute top-10 right-6 sm:right-16 text-right z-10 max-w-md">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-[Poppins] font-bold text-white drop-shadow-md">
          Safe • Reliable • Hygienic
        </h3>
        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-[Poppins]">
          From <span className="text-[#E30613] font-semibold">termites</span> to{" "}
          <span className="text-red-600 font-semibold">mosquitoes</span> and{" "}
          <span className="text-[#2E3A87] font-semibold">rodents</span>, we
          provide complete protection with eco-friendly solutions backed by
          modern technology.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-8 py-3 rounded-full font-[Poppins] border-2 border-[#E30613] text-[#E30613] font-semibold shadow-md hover:bg-[#E30613] hover:text-white transition duration-300">
            Book Your Service
          </button>
        </Link>
      </div>
    </section>
  );
}
