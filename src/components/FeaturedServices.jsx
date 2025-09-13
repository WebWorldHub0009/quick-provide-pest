// src/components/FeaturedServices.jsx
import React from "react";
import { FaHome, FaIndustry, FaBuilding } from "react-icons/fa";
import img1 from "../assets/home/wp1.jpg";
import img2 from "../assets/home/wp1.jpg";
import img3 from "../assets/home/wp1.jpg";
import bgImg from "../assets/home/bgw.jpg"; 

const services = [
  {
    title: "Household Solutions",
    image: img1,
    icon: <FaHome />,
    description:
      "Eco-friendly, family-safe treatments to eliminate pests and prevent future infestations effectively.",
  },
  {
    title: "Industrial Solutions",
    image: img2,
    icon: <FaIndustry />,
    description:
      "Certified industrial pest control to protect business operations with long-term prevention.",
  },
  {
    title: "Commercial Solutions",
    image: img3,
    icon: <FaBuilding />,
    description:
      "Comprehensive commercial pest management for offices, warehouses, and retail spaces.",
  },
];

const FeaturedServices = () => {
  return (
    <section
      className="relative py-8  bg-[70vh] px-6 md:px-12 font-opensans overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 "></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-6">
        <p className="text-sm md:text-base px-4 font-semibold text-[#2ECC71]">
          Pest Control Services
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
          What We Offer
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Safe, reliable, and eco-friendly pest control tailored for homes, industries, and businesses.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/90 rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
          >
            {/* Image */}
            <div className="h-40 md:h-48 overflow-hidden rounded-t-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Icon Badge */}
            <div className="absolute bottom-35 left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg group-hover:bg-[#007BFF] transition-colors">
              {service.icon}
            </div>

            {/* Content */}
            <div className="px-6 py-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#007BFF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-4 text-center">
        <button className="bg-[#2ECC71] text-white py-2 px-6 rounded-full  text-base md:text-lg shadow-lg hover:bg-[#007BFF] hover:shadow-2xl transition-all duration-300">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default FeaturedServices;
