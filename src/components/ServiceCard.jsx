// src/components/ServiceCards.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// Services Data (without images now)
const services = [
  {
    title: "Termite Control",
    slug: "termite-control",
    desc: "Specialized termite treatments to protect your property from structural damage, with long-term prevention strategies.",
  },
  {
    title: "Cockroach Control",
    slug: "cockroach-control",
    desc: "Cockroaches spread diseases and harm your reputation. Protect your family & business today.",
  },
  {
    title: "Rats Control",
    slug: "rats-control",
    desc: "Rats & mice can damage your property and spread diseases. Stop infestations with expert care.",
  },
  {
    title: "Flies Control",
    slug: "flies-control",
    desc: "Flies spread bacteria and create an unhealthy environment. Eliminate them with safe solutions.",
  },
  {
    title: "Bedbugs Treatment",
    slug: "bedbugs-treatment",
    desc: "Bedbugs are difficult to remove once they spread. Ensure peaceful sleep with our treatments.",
  },
  {
    title: "Silverfish Control",
    slug: "silverfish-control",
    desc: "Protect fabrics, books, and valuables from silverfish damage with advanced solutions.",
  },
  {
    title: "Ants Control",
    slug: "ants-control",
    desc: "Ants may look small but they cause big problems. Keep your property ant-free efficiently.",
  },
  {
    title: "Lizard Control",
    slug: "lizard-control",
    desc: "Professional lizard control for homes, schools, factories, and commercial spaces.",
  },
  {
    title: "Snake Control",
    slug: "snake-control",
    desc: "Our unique repellent system ensures snakes stay away safely and effectively.",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative bg-white py-5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
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
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
          <h2 className="font-raleway text-4xl md:text-6xl text-black">
            Our <span className="text-[#2ECC71]">Pest Control Services</span>
          </h2>
        </div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-xl bg-gradient-to-b from-[#111111] to-[#1f1f1f] p-6 h-[200px] flex flex-col justify-between">
                  
                  {/* Big Number */}
                  <div className="absolute top-6 left-6 font-cursive2 text-white text-5xl opacity-10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-cursive2 text-2xl md:text-3xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-300 mt-3 opacity-90 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  <button className="mt-4 px-5 py-2 rounded-full bg-[#2ECC71] text-black font-semibold shadow-md hover:bg-green-600 transition self-start">
                    View Details
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
