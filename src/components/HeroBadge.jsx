import React from 'react'
import { GiMoneyStack, GiHealthNormal, GiSkills } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeroBadge = () => {
  return (
    <section className="relative w-full py-12 px-6 md:px-12 font-opensans overflow-hidden">

      {/* 🔹 SVG Background Pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10 text-eco-green"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 🔹 Green Glow Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-transparent to-royal-blue/10 blur-2xl"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-800">

        {/* Contact Info */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <FaEnvelope className="text-eco-green text-2xl shrink-0" />
          <div>
            <p className="text-sm md:text-base font-semibold font-raleway text-gold tracking-wide">
              Quick Contact
            </p>
            <p className="text-xs md:text-sm">infowespcs@gmail.com</p>
            <p className="text-xs md:text-sm">+91-8585989686</p>
          </div>
        </div>

        {/* Location Info */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <FaMapMarkerAlt className="text-gold text-2xl shrink-0" />
          <div>
            <p className="text-sm md:text-base font-semibold font-raleway text-eco-green tracking-wide">
              Our Location
            </p>
            <p className="text-xs md:text-sm max-w-xs">
              Ground Floor A27, Khanpur Extansion Near Sona Modem Public School, New Devli-110062
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto mt-6 lg:mt-0">

          {/* Card 1 */}
          <div className="relative bg-gradient-to-r from-eco-green to-[#2E8B57] text-black px-6 py-6 rounded-xl w-full sm:w-44 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
            <GiMoneyStack className="text-3xl mb-3 mx-auto text-gold" />
            <p className="text-sm font-semibold font-raleway leading-snug">
              Save Your Time & Money
            </p>
            <BsArrowRight className="mt-3 text-lg mx-auto text-gold" />
            <span className="absolute inset-0 rounded-xl border border-gold/20"></span>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-r from-royal-blue to-[#3B82F6] text-white px-6 py-6 rounded-xl w-full sm:w-44 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
            <GiHealthNormal className="text-3xl mb-3 mx-auto text-gold" />
            <p className="text-sm font-semibold font-raleway leading-snug">
              Healthy Environment
            </p>
            <BsArrowRight className="mt-3 text-lg mx-auto text-gold" />
            <span className="absolute inset-0 rounded-xl border border-white/20"></span>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gradient-to-r from-gold to-[#FFA500] text-black px-6 py-6 rounded-xl w-full sm:w-44 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
            <GiSkills className="text-3xl mb-3 mx-auto text-[#1C1C1C]" />
            <p className="text-sm font-semibold font-raleway leading-snug">
              Trained & Professional
            </p>
            <BsArrowRight className="mt-3 text-lg mx-auto text-[#1C1C1C]" />
            <span className="absolute inset-0 rounded-xl border border-black/20"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBadge
