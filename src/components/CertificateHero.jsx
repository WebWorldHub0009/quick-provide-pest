// src/components/CertificateHero.jsx
import React from "react";
import { motion } from "framer-motion";
import certBg from "../assets/showcase/bgc.jpg"; // background image

export default function CertificateHero() {
  return (
    <section
      className="relative w-full h-[75vh] flex items-center justify-center text-white font-[Poppins] overflow-hidden"
      style={{
        backgroundImage: `url(${certBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Certified & Trusted <br />
          <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Pest Control Experts
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          At <span className="text-green-400 font-semibold">Quick Provide Pest Control</span>, 
          our certifications are proof of safe, eco-friendly, and 
          reliable pest management solutions trusted by thousands.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full 
          bg-gradient-to-r from-green-400 to-green-600 text-black 
          shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Get Certified Protection
        </motion.a>
      </motion.div>
    </section>
  );
}
