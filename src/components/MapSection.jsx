// src/components/MapSection.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="relative w-full bg-[#f5f5f5] py-6 font-[Raleway]">
      {/* Title Overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-3 rounded-full shadow-lg z-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#3CB371] flex items-center gap-2">
          <FaMapMarkerAlt className="text-white text-2xl" />
          Find Us on Map
        </h2>
      </div>

      {/* Map Wrapper */}
      <div className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#3CB371]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112190.3071092884!2d77.15059218826815!3d28.511239346419877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce1da9afe3c13%3A0x2454803e01fb100!2sA%20-%2027%2C%20near%20SONA%20MODERN%20PUBLIC%20SCHOOL%2C%20Khanpur%20Extension%2C%20Sangam%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110080!3m2!1d28.5112642!2d77.2329936!5e0!3m2!1sen!2sin!4v1757574543736!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Info Overlay */}
        <div className="absolute bottom-6 right-6 bg-black/70 text-white p-5 rounded-xl max-w-xs shadow-xl">
          <h3 className="text-lg font-bold text-[#3CB371] mb-2">
            We Secure Pest Control
          </h3>
          <p className="text-sm leading-relaxed">
            A - 27 Ground Floor, Near Sona Modern Public School, Devli Road,  
            Khanpur Village Extension, Sangam Vihar, New Delhi - 110080
          </p>
          <a
            href="https://goo.gl/maps/7tsvmpdQpLq9tCto9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-[#3CB371] text-black px-4 py-2 rounded-full font-semibold hover:bg-[#3CB371] transition"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
