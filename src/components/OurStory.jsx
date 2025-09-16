// src/components/OurStory.jsx
import React from "react";
import storyImg from "../assets/home/h4.jpg"; 
import { FaLeaf, FaShieldAlt } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F9F9F9] to-[#EAF6EF] px-6 md:px-12 lg:px-20 py-8 font-raleway overflow-hidden">
      {/* Decorative Premium SVG Background */}
      <div className="absolute inset-0 -z-0 opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#1F2C73", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#2E3A87", stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <circle cx="15%" cy="25%" r="400" fill="url(#grad)" />
          <circle cx="85%" cy="80%" r="350" fill="url(#grad)" />
        </svg>
      </div>

      {/* Section Title */}
      <div className="mb-6 text-center lg:text-left relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
          Our <span className="text-[#1F2C73]">Story</span>
        </h2>
        <div className="w-20 h-1 bg-[#E30613] mt-2 rounded-full mx-auto lg:mx-0"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Content */}
        <div className="space-y-6 text-gray-800">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#E30613]">
            Protecting Homes, Safeguarding Families
          </h3>
          <p className="text-lg leading-relaxed text-black">
            Founded with a mission to provide{" "}
            <span className="font-semibold text-[#E30613]">
              eco-friendly, reliable pest control
            </span>
            , Quick Provide Pest Control has been serving homes and businesses
            across Delhi for over a decade. Our journey is one of trust,
            precision, and commitment to healthier living spaces.
          </p>
          <p className="text-lg leading-relaxed text-black">
            From eliminating termites and rodents to protecting against
            mosquitoes and bugs, our experts use safe, government-approved
            treatments that prioritize both your safety and the environment.
          </p>
        </div>

        {/* Right Side - Image & Badge */}
        <div className="relative flex flex-col items-center">
          {/* Catchy Tagline on Top of Image */}
          <p className="absolute -top-8 text-xl text-[#1F2C73] bg-white shadow-md px-5 py-2 rounded-full">
            Your Safety, Our Priority
          </p>

          <img
            src={storyImg}
            alt="Quick Provide Pest Control Team"
            className="w-full h-[350px] object-cover rounded-2xl shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Badge */}
          <div className="absolute -bottom-10 bg-white border-4 border-[#E30613] rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500">
            <FaLeaf className="text-[#E30613] text-3xl mb-2" />
            <p className="font-semibold text-black text-sm text-center">
              Eco-Friendly <br /> Certified Service
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Extra Content */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
        <div className="bg-[#2E3A87] rounded-xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 transition-all text-white">
          <FaShieldAlt className="text-[#E30613] text-3xl mx-auto mb-3" />
          <h4 className="text-xl font-bold text-white">Safe Solutions</h4>
          <p className="mt-2 text-white">
            Only government-approved, eco-friendly treatments for your safety.
          </p>
        </div>
        <div className="bg-[#2E3A87] rounded-xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 transition-all text-white">
          <FaLeaf className="text-[#E30613] text-3xl mx-auto mb-3" />
          <h4 className="text-xl font-bold text-white">Eco-Friendly</h4>
          <p className="mt-2 text-white">
            Sustainable methods that protect your family and the environment.
          </p>
        </div>
        <div className="bg-[#2E3A87] rounded-xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 transition-all text-white">
          <FaShieldAlt className="text-[#E30613] text-3xl mx-auto mb-3" />
          <h4 className="text-xl font-bold text-white">Trusted Experts</h4>
          <p className="mt-2 text-white">
            Over 10+ years of professional service trusted by thousands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
