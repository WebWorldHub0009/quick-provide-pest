// src/components/HowItWorks.jsx
import React from "react";
import {
  FaBug,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaLeaf,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Identify the Pest",
    description:
      "Our certified experts conduct a thorough inspection to detect pest type and infestation level with precision.",
    icon: <FaBug size={28} />,
  },
  {
    id: 2,
    title: "Customized Treatment Plan",
    description:
      "We prepare a targeted strategy designed specifically for your property, ensuring maximum efficiency.",
    icon: <FaShieldAlt size={28} />,
  },
  {
    id: 3,
    title: "Safe & Effective Execution",
    description:
      "Our eco-friendly and approved solutions eradicate pests quickly while keeping your environment safe.",
    icon: <FaHandHoldingMedical size={28} />,
  },
  {
    id: 4,
    title: "Follow-Up & Prevention",
    description:
      "We provide regular follow-ups and preventive advice to ensure your property remains pest-free.",
    icon: <FaLeaf size={28} />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-white via-green-100 to-white">
      {/* Header */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C]">
          How <span className="text-green-600">Quick Provide</span> Works
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          A professional 4-step process that ensures lasting results and
          peace of mind for your home or business.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-600 text-white mb-5">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
