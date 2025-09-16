// src/components/WhyChooseUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBug, FaLeaf, FaShieldAlt } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaBug size={30} />,
      title: "Powerful Pest Removal",
      desc: "We don’t just control pests, we eliminate them with precision and ensure long-lasting protection.",
      active: true,
    },
    {
      icon: <FaLeaf size={30} />,
      title: "Eco-Safe Treatments",
      desc: "All solutions are 100% eco-friendly, family-safe, and pet-safe, designed with nature in mind.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Safety First",
      desc: "Our certified experts follow global safety protocols, ensuring your home and office remain protected.",
    },
  ];

  return (
    <section className="bg-[#2e3a85]/40 py-10 px-6 sm:px-10 lg:px-24 text-white font-franklin">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-epunda font-bold text-[#E30613] mb-3">
              Why Choose Quick Provide Pest Control?
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-xl">
              From eco-friendly methods to certified professionals, Quick Provide
              ensures your home and workplace stay pest-free, safe, and
              comfortable.
            </p>
          </div>

          <Link
            to="/services"
            className="bg-[#E30613] text-white px-7 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
          >
            Go To Service
          </Link>
        </div>

        {/* Cards */}
        {/* Mobile slider */}
        <div className="block md:hidden mb-12">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {reasons.map((reason, idx) => (
              <SwiperSlide key={idx}>
                <Card reason={reason} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {reasons.map((reason, idx) => (
            <Card key={idx} reason={reason} />
          ))}
        </div>

        {/* Sleek Full-width Badge */}
        <div className="w-full rounded-xl bg-gradient-to-r from-[#1F2C73] via-[#2E3A87] to-[#1F2C73] text-white py-4 px-6 md:px-12 shadow-lg">
          <p className="text-center leading-relaxed max-w-5xl mx-auto">
            At <span className="text-[#E30613] font-semibold">Quick Provide Pest Control</span>,
            we combine advanced technology, certified expertise, and eco-safe
            methods to deliver results that truly last. Our mission is simple:
            keep your spaces <span className="text-[#E30613] font-semibold">pest-free, safe, and
            comfortable</span> — so you can focus on living, not worrying.
          </p>
        </div>
      </div>
    </section>
  );
}

// Card component
const Card = ({ reason }) => (
  <div
    className={`rounded-2xl px-6 py-6 flex flex-col justify-between items-center text-center shadow-xl backdrop-blur-lg border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
      reason.active
        ? "bg-gradient-to-br from-[#E30613] via-[#1F2C73] to-[#2E3A87] text-white border-none"
        : "bg-white text-[#000000] border border-gray-300"
    } animate-fade-in`}
  >
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md transition ${
        reason.active
          ? "bg-white text-[#E30613]"
          : "bg-[#2E3A87]/10 text-[#1F2C73]"
      }`}
    >
      {reason.icon}
    </div>

    <div className="flex flex-col flex-1 justify-between">
      <h3 className="text-lg md:text-xl font-epunda font-semibold mb-3">
        {reason.title}
      </h3>
      <p className="text-sm leading-relaxed opacity-90">{reason.desc}</p>
    </div>

    <Link
      to="/services"
      className={`mt-6 px-6 py-2.5 rounded-full font-medium transition shadow ${
        reason.active
          ? "bg-white text-[#E30613] hover:bg-gray-100"
          : "bg-[#1F2C73] text-white hover:bg-[#2E3A87]"
      }`}
    >
      Learn More
    </Link>

    <style>
      {`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-in-out both;
        }
      `}
    </style>
  </div>
);
