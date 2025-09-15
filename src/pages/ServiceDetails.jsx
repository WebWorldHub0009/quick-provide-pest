// src/pages/ServiceDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import {
  FaLeaf,
  FaCheckCircle,
  FaInfoCircle,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaHandsHelping,
  FaRegSmile,
} from "react-icons/fa";
import services from "../pages/service"; // make sure this is exported as an array
import { motion } from "framer-motion";
import Badge from "../components/Badge"
import ServiceSlider from "../components/Service"


export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        Service Not Found
      </div>
    );
  }

  return (
    <>
    <div className="font-[Raleway] relative bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] flex flex-col justify-center items-center text-center bg-gray-50">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>
        <motion.div
          className="relative z-10 px-6 md:px-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            {service.title}
          </h1>
          {/* Premium lines under heading */}
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium space-y-2">
            <span className="block">🌟 Professional & Certified Treatments</span>
            <span className="block">🌿 Eco-Friendly & Safe Solutions</span>
            <span className="block">💯 Guaranteed Results for Your Home & Office</span>
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10">
        {/* Description Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="rounded-2xl h-[400px] w-full shadow-2xl border-4 border-green-200 hover:scale-105 transition-transform duration-500"
          />
          <div>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-4">
              {service.desc}
            </p>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
              {service.details}
            </p>
          </div>
        </motion.div>

        {/* Features & Benefits */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-green-50 p-8 rounded-3xl shadow-xl border border-green-100 hover:shadow-green-300 transition transform hover:-translate-y-1">
            <h3 className="text-3xl font-semibold text-green-700 mb-6 flex items-center gap-3">
              <FaLeaf /> Key Features
            </h3>
            <ul className="space-y-4 text-gray-800 text-lg">
              {service.features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl shadow-xl border border-green-100 hover:shadow-green-300 transition transform hover:-translate-y-1">
            <h3 className="text-3xl font-semibold text-green-700 mb-6 flex items-center gap-3">
              <FaShieldAlt /> Benefits
            </h3>
            <ul className="space-y-4 text-gray-800 text-lg">
              {service.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaHandsHelping className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Treatment Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-green-700 text-center mb-12">
            Treatment Steps
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {service.treatmentSteps.map((step, i) => (
              <motion.div
                key={i}
                className="p-8 bg-green-50 rounded-3xl shadow-xl border border-green-200 hover:shadow-green-400 transition transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-2xl font-bold text-green-800 mb-4">
                  Step {i + 1}
                </h4>
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="bg-gradient-to-r from-green-50 via-white to-green-50 p-6 rounded-3xl shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
            <FaInfoCircle /> Additional Information
          </h3>
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div className="space-y-6">
              <p className="text-xl">
                <FaClock className="inline text-green-500 mr-2" />
                <span className="font-semibold text-green-700">Duration:</span>{" "}
                {service.extraInfo.duration}
              </p>
              <p className="text-xl">
                <FaShieldAlt className="inline text-green-500 mr-2" />
                <span className="font-semibold text-green-700">Validity:</span>{" "}
                {service.extraInfo.validity}
              </p>
              <p className="text-xl">
                <FaLeaf className="inline text-green-500 mr-2" />
                <span className="font-semibold text-green-700">
                  Suitable For:
                </span>{" "}
                {service.extraInfo.suitableFor}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-green-700 mb-3">
                Conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                {service.extraInfo.conditions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <p className="mt-6 text-xl">
                <FaRegSmile className="inline text-green-500 mr-2" />
                <span className="font-semibold text-green-700">After Care:</span>{" "}
                {service.extraInfo.afterCare}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
    <Badge/>
    <ServiceSlider/>
    </>
  );
}
