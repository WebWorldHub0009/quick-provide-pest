// src/components/ServiceHero.jsx
import React from "react";
import {
  FaBug,
  FaShieldAlt,
  FaLeaf,
  FaPumpSoap,
} from "react-icons/fa";
import bgImage from "../assets/showcase/sbg.jpg";

export default function ServiceHero() {
  const services = [
    { icon: <FaBug />, text: "Advanced Pest Elimination" },
    { icon: <FaShieldAlt />, text: "Long-lasting Protection" },
    { icon: <FaLeaf />, text: "Eco-friendly Solutions" },
    { icon: <FaPumpSoap />, text: "Safe & Hygienic Methods" },
  ];

  return (
    <section
      className="relative w-full h-[75vh] font-[poppins] flex items-end"
    >
      {/* Background with lazy loading */}
      <img
        src={bgImage}
        alt="Service Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full p-6 sm:p-10 md:p-16 flex flex-col items-center justify-end text-center">
        {/* Main Heading */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black drop-shadow-lg">
            Quick Provide <br /> Premium Pest Control
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white leading-relaxed">
            Protecting your home and business with{" "}
            <span className="text-[#E30613] font-semibold">
              safe, effective, and eco-friendly
            </span>{" "}
            pest control solutions.
          </p>
          <p className="mt-4 text-lg sm:text-xl font-medium text-[#E30613] italic tracking-wide">
            “Clean Spaces, Healthy Living.”
          </p>
        </div>

        {/* Services Highlights - Bottom Center */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 bg-[#2E3A87]/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:bg-[#2E3A87]/60 hover:shadow-md hover:shadow-[#E30613]/40 transition transform hover:-translate-y-0.5"
              >
                <span className="text-2xl text-[#E30613]">{item.icon}</span>
                <span className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
