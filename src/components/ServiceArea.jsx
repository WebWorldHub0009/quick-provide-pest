// src/components/ServiceAreas.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const areas = [
  "Pest Control in Dwarka Delhi",
  "Pest Control in Mayur Vihar",
  "Pest Control in Patparganj",
  "Pest Control in South Extension",
  "Pest Control in Laxmi Nagar",
  "Pest Control in Greater Kailash",
  "Pest Control in Lajpat Nagar",
  "Pest Control in Connaught Place",
  "Pest Control in Pitampura",
  "Pest Control in Preet Vihar",
  "Pest Control in Vikas Puri",
  "Pest Control in Rohini",
  "Pest Control in Vasant Kunj",
  "Pest Control in West Delhi",
  "Pest Control in East Delhi",
  "Pest Control in South Delhi",
  "Pest Control in Gurgaon",
  "Pest Control in Noida",
  "Pest Control in Greater Noida",
  "Pest Control in Uttam Nagar",
  "Pest Control in Ghaziabad",
  "Pest Control in Indirapuram",
  "Pest Control in Noida Extension",
];

const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section className="relative py-8 bg-white  text-black font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#3CB371] drop-shadow-lg font-raleway">
          Our Service Areas
        </h2>
        <p className="text-gray-800 font-raleway mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Delivering premium, eco-friendly pest control across Delhi NCR.  
          Select your area to learn more.
        </p>

        {/* Grid of Cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -3 }}
              className="bg-white/5 backdrop-blur-lg border border-[#3CB371]/20 rounded-2xl p-4 cursor-pointer 
              shadow-md  transition duration-300"
              onClick={() => setSelectedArea(area)}
            >
              <div className="flex items-center gap-3 text-[#3CB371]">
                <FaMapMarkerAlt className="text-xl" />
                <h3 className="text-base font-raleway font-medium text-gray-800 tracking-wide">
                  {area}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArea && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#121212] via-[#1f1f1f] to-[#121212] 
              rounded-2xl max-w-lg w-full p-8 relative text-gray-800 shadow-xl border border-[#3CB371]/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 text-gray-800 hover:text-white"
              >
                <FaTimes size={22} />
              </button>
              <h3 className="text-2xl font-bold text-[#3CB371] mb-4 drop-shadow-md">
                {selectedArea}
              </h3>
              <p className="text-gray-800 leading-relaxed text-base">
                At <span className="text-[#3CB371] font-semibold">We Secure Pest Control</span>,  
                we bring modern, eco-friendly pest control solutions to{" "}
                <span className="text-gray-800 font-medium">{selectedArea}</span>.  
                From termite and rodent control to bed bugs, cockroaches, and mosquitoes –  
                our expert team ensures clean, safe, and pest-free living.
              </p>
              <div className="mt-6 flex justify-center">
                <Link to="/contact">
                  <button className="px-6 py-3 bg-[#3CB371] text-black font-semibold rounded-full shadow-lg hover:bg-[#2f9d5d] transition-all duration-300">
                    Book Service Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceAreas;
