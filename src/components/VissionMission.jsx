// src/components/VisionMission.jsx
import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 font-[Raleway] overflow-hidden">
      {/* Premium SVG Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="greenish" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3CB371" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#004C8C" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Wavy Layers */}
          <path
            d="M0,300 C150,200 350,400 600,300 C850,200 1050,400 1400,300 L1400,0 L0,0 Z"
            fill="url(#greenish)"
          />
          <circle cx="20%" cy="70%" r="200" fill="url(#greenish)" opacity="0.3" />
          <circle cx="80%" cy="20%" r="250" fill="url(#greenish)" opacity="0.25" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Vision */}
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl p-10 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <FaEye className="text-[#3CB371] text-5xl mb-6" />
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-6">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            At{" "}
            <span className="font-semibold text-[#3CB371]">
              Quick Provide Pest Control
            </span>
            , our vision is to become India’s most{" "}
            <strong>
              trusted, eco-conscious, and technology-driven pest management
              brand
            </strong>
            , safeguarding homes, businesses, and communities from harmful
            pests.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            We aim to set new benchmarks in{" "}
            <strong>quality, safety, and customer satisfaction</strong>, making
            pest-free living accessible to everyone — without compromising
            health or the planet.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl p-10 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <FaBullseye className="text-[#003366] text-5xl mb-6" />
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-6">
            Our Mission
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <li>
              ✔ Deliver{" "}
              <strong>fast, effective, and eco-friendly pest control solutions</strong>.
            </li>
            <li>
              ✔ Provide households & businesses with{" "}
              <strong>affordable, reliable protection</strong>.
            </li>
            <li>
              ✔ Innovate with <strong>sustainable practices</strong> for long-term safety.
            </li>
            <li>
              ✔ Offer <strong>24/7 quick response services</strong> for peace of mind.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
