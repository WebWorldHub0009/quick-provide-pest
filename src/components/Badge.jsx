// src/components/WeSecureBadge.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaCertificate,
} from "react-icons/fa";

export default function WeSecureBadge() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-10 px-6 md:px-16 font-[Poppins] relative overflow-hidden">
      {/* Subtle glow particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-2 h-2 bg-green-500 rounded-full absolute animate-pulse"
          style={{ top: "10%", left: "15%" }}
        ></div>
        <div
          className="w-2 h-2 bg-green-500 rounded-full absolute animate-pulse"
          style={{ top: "40%", left: "70%" }}
        ></div>
        <div
          className="w-2 h-2 bg-green-500 rounded-full absolute animate-pulse"
          style={{ top: "70%", left: "30%" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-[#111111]/80 border border-[#3CB371]/40 shadow-lg rounded-2xl px-6 sm:px-8 lg:px-12 py-10 backdrop-blur-md relative z-10 gap-8">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-3xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-cursive2 font-bold text-[#3CB371] tracking-wide flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4">
            <span className="flex items-center gap-1">
              <FaShieldAlt /> Safe
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <FaLeaf /> Reliable
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <FaStar /> Premium Pest Solutions
            </span>
          </h3>

          {/* Static Premium Lines */}
          <p className="text-gray-300 mt-2 text-sm sm:text-base font-raleway leading-relaxed">
            At{" "}
            <span className="font-cursive1 text-[#3CB371]">
              Quick Provide Pest Control
            </span>
            , we go beyond extermination — we deliver{" "}
            <span className="text-[#3CB371] font-cursive1">
              long-term protection
            </span>
            . Our{" "}
            <span className="text-[#3CB371] font-cursive1">
              eco-friendly techniques
            </span>{" "}
            ensure a safe, pest-free environment. Trusted by thousands of homes
            and businesses.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mt-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm sm:text-base">
              <FaCheckCircle /> Eco-Friendly
            </div>
            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm sm:text-base">
              <FaClock /> 24/7 Support
            </div>
            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm sm:text-base">
              <FaCertificate /> Certified Experts
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <Link
            to="/contact"
            className="px-8 py-3 text-base sm:text-lg font-body rounded-full bg-gradient-to-r from-[#3CB371] to-[#2e9e5e] text-black hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Get Protection
          </Link>
        </div>
      </div>
    </section>
  );
}
