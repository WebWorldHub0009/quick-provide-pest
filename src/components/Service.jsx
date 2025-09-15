// src/components/Service.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Services data
const services = [
  {
    title: "Termite Control",
    slug: "termite-control",
    description:
      "Protect your property from destructive termites with advanced treatment methods.",
  },
  {
    title: "Cockroach Control",
    slug: "cockroach-control",
    description:
      "Eco-friendly cockroach control solutions to ensure a hygienic living space.",
  },
  {
    title: "Rats Control",
    slug: "rats-control",
    description:
      "Eliminate rats and rodents with safe and long-lasting methods for homes and businesses.",
  },
  {
    title: "Flies Control",
    slug: "flies-control",
    description:
      "Effective fly management solutions for a clean and healthy environment.",
  },
  {
    title: "Bedbugs Treatment",
    slug: "bedbugs-treatment",
    description:
      "Professional bed bug treatment for peaceful sleep and a hygienic home.",
  },
  {
    title: "Herbal & Gel Treatment",
    slug: "herbal-gel-treatment",
    description:
      "Natural and eco-friendly herbal & gel treatments to eliminate pests safely.",
  },
  {
    title: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    description:
      "Comprehensive water tank cleaning services for safe and clean water.",
  },
];

export default function Service() {
  return (
    <section className="relative py-10 text-center text-black bg-white">
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        
        <h3 className="text-2xl sm:text-4xl font-bold text-green-800 mt-3">
          Trusted Pest Control Solutions by Quick Provide
        </h3>
      

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition duration-300 h-full">
                <FaShieldAlt className="text-green-800 text-4xl mb-3" />
                <h4 className="text-lg uppercase font-bold text-gray-800 mt-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-900 transition"
                >
                  Show More
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-10 text-gray-700">
          Don’t hesitate, contact us for help and services.{" "}
          <Link
            to={"/contact"}
            className="text-green-800 underline hover:text-green-900 transition"
          >
            Book Online
          </Link>
        </p>
      </div>
    </section>
  );
}
