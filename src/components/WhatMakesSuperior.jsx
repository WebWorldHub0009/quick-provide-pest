import React from "react";
import {
  FaBug,
  FaClock,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";
import superiorImg from "../assets/home/h4.jpg"; 

export default function WhatMakesUsSuperior() {
  return (
    <section className="w-full bg-gray-50 font-sans py-12 px-4 md:px-5">
      <div className="flex flex-col lg:flex-row lg:h-[600px] w-full gap-6">
        
        {/* Column 1 - Left Cards */}
        <div className="flex flex-col lg:w-1/4 gap-6 lg:gap-4">
          <div className="flex-1 bg-green-600 text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <FaBug size={40} className="mb-4" />
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Expert Pest Detection
            </h3>
            <p className="text-sm mt-2 text-center leading-relaxed">
              Fast and accurate identification of pests in your home or office.
            </p>
          </div>

          <div className="flex-1 bg-emerald-800 text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <FaClock size={40} className="mb-4" />
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Rapid Response
            </h3>
            <p className="text-sm mt-2 text-center leading-relaxed">
              Same-day or next-day services to keep your spaces pest-free.
            </p>
          </div>
        </div>

        {/* Column 2 - Image */}
        <div className="lg:w-[40%] w-full rounded-xl overflow-hidden shadow-2xl">
          <img
            src={superiorImg}
            alt="What Makes Us Superior"
            className="h-[300px] lg:h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Column 3 - Right Cards */}
        <div className="flex flex-col lg:w-[35%] gap-6 lg:gap-4">
          {/* Top Right - Heading */}
          <div className="flex-1 bg-white flex flex-col justify-center items-start p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
              WHAT MAKES US <span className="text-green-600">SUPERIOR?</span>
            </h2>
            <p className="mt-4 text-gray-700 text-base leading-relaxed">
              At Quick Pest Control, we combine expertise, eco-friendly solutions, and fully insured services to ensure complete protection. 
              Our team works quickly and efficiently, making your home or office pest-free with minimal disruption.
            </p>
          </div>

          {/* Bottom Right - Two Cards */}
          <div className="flex flex-col gap-4 sm:flex-row flex-1">
            <div className="sm:w-1/2 bg-green-700 text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <FaLeaf size={40} className="mb-4" />
              <h3 className="text-lg font-bold uppercase tracking-wide">
                Eco-Friendly Approach
              </h3>
              <p className="text-sm mt-2 text-center leading-relaxed">
                Safe, non-toxic pest control solutions for your family and pets.
              </p>
            </div>
            <div className="sm:w-1/2 bg-gray-800 text-white flex flex-col items-center justify-center p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <FaShieldAlt size={40} className="mb-4" />
              <h3 className="text-lg font-bold uppercase tracking-wide">
                Full Protection Guarantee
              </h3>
              <p className="text-sm mt-2 text-center leading-relaxed">
                Complete peace of mind with follow-ups and insured pest removal services.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
