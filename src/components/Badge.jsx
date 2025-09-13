import React from "react";
import { Link } from "react-router-dom";

export default function WeSecureBadge() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-6 px-6 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#111111]/80 border border-[#3CB371]/40 shadow-lg rounded-2xl px-6 md:px-10 py-6 backdrop-blur-md">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-cursive2 font-bold text-[#3CB371] tracking-wide">
            Safe • Reliable • Premium Pest Solutions
          </h3>
          <p className="mt-2 text-gray-300 text-sm font-raleway md:text-base font-body leading-relaxed">
            At <span className="font-cursive1 text-[#3CB371]">We Secure Pest Control</span>, 
            we go beyond extermination — we deliver <span className="text-[#3CB371] font-cursive1">long-term protection</span>.  
            From homes to businesses, our eco-friendly and advanced techniques 
            ensure a <span className="text-[#3CB371]">healthy, pest-free environment</span> 
            that’s both premium and affordable.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="mt-4 md:mt-0">
          <Link
            to="/contact"
            className="px-8 py-2 text-lg font-body rounded-full bg-[#3CB371] text-black hover:bg-[#2e9e5e] transition-all shadow-md hover:shadow-xl"
          >
            Get Protection
          </Link>
        </div>
      </div>
    </section>
  );
}
