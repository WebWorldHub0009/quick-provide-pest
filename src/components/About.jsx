import React from "react";
import { FaArrowRight, FaLeaf, FaPhoneAlt } from "react-icons/fa";
import img from "../assets/home/h2.jpg";
import { Link } from "react-router-dom";

export default function AboutQuickProvide() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12 font-franklin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
        
        {/* Left Section (Image + Overlay) */}
        <div className="bg-[#2E3A87] rounded-2xl overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src={img}
              alt="Quick Provide Pest Control"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
            {/* SVG overlay */}
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M-0.84,24.14 C150.00,150.00 349.59,-49.98 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
                style={{ stroke: "none", fill: "#1F2C73" }}
              ></path>
            </svg>
            {/* Arrow button */}
            <Link to="/showcase">
              <button className="cursor-pointer absolute top-4 right-4 bg-white text-[#E30613] rounded-full p-3 shadow-md hover:bg-[#E30613] hover:text-white transition">
                <FaArrowRight />
              </button>
            </Link>
          </div>

          {/* Left Text */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#E30613]">
              Our Expertise
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base leading-relaxed">
              Delivering safe, eco-friendly pest control solutions using
              advanced technology and certified experts. We protect homes,
              offices, and industries with premium care.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border-t border-[#1F2C73] text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5K+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="py-4 bg-[#1F2C73] hover:bg-[#2E3A87] transition"
              >
                <p className="text-lg sm:text-2xl font-bold text-white">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Content) */}
        <div className="text-center md:text-left">
          {/* Tag */}
          <span className="inline-block bg-[#E30613] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            About Us?
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mt-3">
            Premium Pest Control Service with Guaranteed Results
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
            At <strong>Quick Provide Pest Control</strong>, we believe in more
            than just eliminating pests — we deliver long-term protection,
            eco-friendly treatments, and peace of mind. From households to large
            businesses, our experts create tailored solutions for every space.
          </p>

          {/* Feature Cards */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
            <div className="flex items-start gap-3 p-4 bg-[#2E3A87] rounded-xl shadow-sm w-full sm:w-1/2">
              <div className="p-3 bg-white rounded-lg text-[#E30613] flex-shrink-0">
                <FaLeaf size={22} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Eco-Safe Chemicals
                </h4>
                <p className="text-gray-200 text-xs sm:text-sm">
                  We use WHO-approved chemicals ensuring safety for your family
                  and pets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#2E3A87] rounded-xl shadow-sm w-full sm:w-1/2">
              <div className="p-3 bg-white rounded-lg text-[#E30613] flex-shrink-0">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  24/7 Quick Support
                </h4>
                <p className="text-gray-200 text-xs sm:text-sm">
                  Our dedicated support team ensures fast response and service
                  anytime you need us.
                </p>
              </div>
            </div>
          </div>

          {/* Mini List */}
          <ul className="mt-6 space-y-2 text-sm sm:text-base text-gray-800">
            <li>✔️ 100% Eco-Friendly Pest Solutions</li>
            <li>✔️ Affordable & Transparent Pricing</li>
            <li>✔️ Certified Experts with Modern Equipment</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 mt-10 justify-center md:justify-start">
            <Link to="/about">
              <button className="cursor-pointer px-6 py-3 bg-[#E30613] text-white rounded-full shadow-md hover:bg-red-700 transition text-sm sm:text-base">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="cursor-pointer px-6 py-3 bg-[#1F2C73] text-white rounded-full shadow-md hover:bg-[#2E3A87] transition text-sm sm:text-base">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
