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
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/60 to-[#000000]/50 z-0"></div>

      {/* Watermark */}
      <h1 className="absolute text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-[#FFFFFF08] top-1/4 left-1/2 -translate-x-1/2 pointer-events-none uppercase tracking-[0.2em] italic">
        PEST FREE
      </h1>

      {/* Left Content */}
      <div className="absolute bottom-10 left-6 sm:left-16 max-w-md text-left z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[Poppins] text-[#3CB371] leading-tight drop-shadow-lg">
          Quick Provide Pest Control
        </h2>
        <p className="mt-4 text-[#E5F5E0] text-base sm:text-lg md:text-xl font-[Poppins] leading-relaxed">
          Over <span className="font-bold text-white">10+ years</span> of
          excellence in pest management. Delivering eco-friendly, safe, and
          reliable pest control for homes, offices, and industries across Delhi.
        </p>
        <Link to="/services">
          <button className="mt-5 px-8 cursor-pointer py-3 rounded-full bg-gradient-to-r from-[#3CB371] to-[#1B4332] text-white font-semibold font-[Poppins] shadow-lg hover:opacity-90 transition duration-300">
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
          From <span className="text-[#FFD700] font-semibold">termites</span> to{" "}
          <span className="text-[#3CB371] font-semibold">mosquitoes</span> and{" "}
          <span className="text-[#FF6B6B] font-semibold">rodents</span>, we
          provide complete protection with eco-friendly solutions backed by
          modern technology.
        </p>
        <Link to="/contact">
          <button className="mt-6 cursor-pointer px-8 py-3 rounded-full font-[Poppins] border-2 border-[#3CB371] text-[#3CB371] font-semibold shadow-md hover:bg-[#3CB371] hover:text-white transition duration-300">
            Book Your Service
          </button>
        </Link>
      </div>
    </section>
  );
}
