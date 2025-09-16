// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-12 font-[Raleway]">
      {/* Section Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3CB371] to-[#1C1C1C] px-8 py-3 rounded-full shadow-2xl z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 tracking-wide">
          <FaMapMarkerAlt className="text-[#FFD700] text-2xl" />
          Find Us on Map
        </h2>
      </div>

      {/* Map Container */}
      <div className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] border-4 border-[#3CB371]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.370951571965!2d77.20785727550205!3d28.557232375705917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d74c2c4c3b%3A0x9a8e99c41af0f4e1!2sAnupam%20Plaza%2C%20Building%2056%2C%20Shop%20No.%20G1%2C%20Ground%20Floor%2C%20Opposite%20Azad%20Apartment%2C%20Behind%20Adarsh%20Express%2C%20Vijay%20Mandal%20Enclave%2C%20Arvindo%20Marg%2C%20Kalu%20Sarai%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1726310782732!5m2!1sen!2sin"
          width="100%"
          height="480"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Info Card Overlay */}
        <div className="absolute bottom-6 right-6 bg-[#1C1C1C]/90 text-white p-6 rounded-2xl max-w-sm shadow-2xl backdrop-blur-md">
          <h3 className="text-xl font-extrabold text-[#3CB371] mb-3">
            Quick Provide Pest Control
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Anupam Plaza, Building 56, Shop No. G1, Ground Floor,
            Opposite Azad Apartment, Behind Adarsh Express, Vijay Mandal Enclave,  
            Nearby Courier Point, Arvindo Marg, Kalu Sarai,  
            New Delhi - 110016, India
          </p>
          <a
            href="https://goo.gl/maps/9dM7nJ8cHFvS7z7A9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-[#3CB371] to-[#2E8B57] text-white px-5 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
