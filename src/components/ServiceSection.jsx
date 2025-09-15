// src/components/Service.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

import ter from "../assets/service/ter.jpg";
import cock from "../assets/service/cock.jpeg";
import bug from "../assets/service/bug.jpeg";
import rat from "../assets/service/rat.jpg";
import water from "../assets/service/water.jpeg";
import herbal from "../assets/service/herbal.jpeg";
import fly from "../assets/service/fly.jpg";

import bg from "../assets/service/ksbg.jpg"; 

const services = [
  {
    title: "Termite Control",
    slug: "termite-control",
    imgSrc: ter,
    description: "Protect your property from destructive termites with advanced treatment methods."
  },
  {
    title: "Cockroach Control",
    slug: "cockroach-control",
    imgSrc: cock,
    description: "Eco-friendly cockroach control solutions to ensure a hygienic living space."
  },
  {
    title: "Rats Control",
    slug: "rats-control",
    imgSrc: rat,
    description: "Eliminate rats and rodents with safe and long-lasting methods for homes and businesses."
  },
  {
    title: "Flies Control",
    slug: "flies-control",
    imgSrc: fly,
    description: "Effective fly management solutions for a clean and healthy environment."
  },
  {
    title: "Bedbugs Treatment",
    slug: "bedbugs-treatment",
    imgSrc: bug,
    description: "Professional bed bug treatment for peaceful sleep and a hygienic home."
  },
  {
    title: "Herbal & Gel Treatment",
    slug: "herbal-gel-treatment",
    imgSrc: herbal,
    description: "Natural and eco-friendly herbal & gel treatments to eliminate pests safely."
  },
  {
    title: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    imgSrc: water,
    description: "Comprehensive water tank cleaning services for safe and clean water."
  },
];

export default function Service() {
  return (
    <section
      className="relative py-10 text-center text-black bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-green-800 uppercase tracking-wider text-sm font-bold">
          Our <span className="text-green-900">Services</span>
        </h2>
        <h3 className="text-2xl sm:text-4xl font-bold text-white mt-3">
          Trusted <span className="text-green-800">Pest Control Solutions</span> by Quick Provide.
        </h3>
        <p className="text-gray-100 max-w-3xl mx-auto mt-5 mb-5">
          We offer professional pest control services to protect your home and business. Click any service below to view full details.
        </p>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 shadow-md rounded-xl p-5 w-80 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              {service.imgSrc && (
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
              )}

              <FaShieldAlt className="text-green-800 text-3xl mb-2" />

              <h4 className="text-lg uppercase font-bold text-gray-800 mt-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">
                {service.description}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="px-6 py-2 bg-green-800 text-white rounded-full hover:bg-green-900 transition"
              >
                Show More
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-100">
          Don’t hesitate, contact us for help and services.{" "}
          <Link
            to={"/contact"}
            className="text-green-400 underline hover:text-green-500 transition"
          >
            Book Online
          </Link>
        </p>
      </div>
    </section>
  );
}
