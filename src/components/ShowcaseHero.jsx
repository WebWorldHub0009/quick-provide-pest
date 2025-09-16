// src/components/ShowcaseHero.jsx
import React, { useState, useEffect } from "react";
import { FaBug, FaShieldAlt, FaSmile } from "react-icons/fa";
import showcaseBg from "../assets/showcase/s9.jpg";
import { Link } from "react-router-dom";

export default function ShowcaseHero() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = showcaseBg;
    img.loading = "lazy"; // ✅ Lazy loading
    img.onload = () => {
      setBgUrl(showcaseBg);
      setBgLoaded(true);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: bgLoaded
          ? `url(${bgUrl})`
          : "linear-gradient(135deg, #1F2C73, #2E3A87)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Dark + Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-5 text-black drop-shadow-lg tracking-tight leading-snug">
          Premium Pest Control Solutions
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-white max-w-2xl">
          At{" "}
          <span className="font-semibold text-[#E30613]">
            Quick Provide Pest Control
          </span>
          , we combine eco-friendly treatments, modern technology, and trusted
          expertise to create healthier, pest-free spaces for homes and
          businesses.
        </p>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#2E3A87]/50 backdrop-blur-md shadow-md border border-white/20">
            <FaBug className="text-[#E30613] text-2xl" />
            <span className="text-sm sm:text-base md:text-lg text-white">
              Eco-Friendly Pest Control
            </span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#2E3A87]/50 backdrop-blur-md shadow-md border border-white/20">
            <FaShieldAlt className="text-[#E30613] text-2xl" />
            <span className="text-sm sm:text-base md:text-lg text-white">
              24/7 Protection
            </span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#2E3A87]/50 backdrop-blur-md shadow-md border border-white/20">
            <FaSmile className="text-[#E30613] text-2xl" />
            <span className="text-sm sm:text-base md:text-lg text-white">
              1000+ Happy Clients
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-full font-semibold text-lg text-white 
          bg-gradient-to-r from-[#E30613] via-[#C62828] to-[#1F2C73] 
          shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
