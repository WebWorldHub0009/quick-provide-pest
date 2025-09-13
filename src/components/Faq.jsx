// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBug,
  FaLeaf,
  FaShieldAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const faqCategories = {
  "Our Services": {
    icon: <FaBug className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "What types of pests do you control?",
        answer:
          "We handle termites, cockroaches, bed bugs, rodents, mosquitoes, ants, and more with targeted solutions.",
      },
      {
        question: "Do you provide both residential and commercial pest control?",
        answer:
          "Yes! We serve homes, offices, hotels, restaurants, warehouses, and industrial facilities.",
      },
      {
        question: "Are your pest control methods eco-friendly?",
        answer:
          "Absolutely. We use herbal and safe treatments wherever possible, ensuring safety for kids, pets, and the environment.",
      },
    ],
  },
  "Process & Safety": {
    icon: <FaShieldAlt className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "How does your pest control process work?",
        answer:
          "We start with an inspection, identify the problem, and apply customized treatments using advanced equipment and techniques.",
      },
      {
        question: "Is it safe for children and pets?",
        answer:
          "Yes. Our solutions are non-toxic, eco-friendly, and applied by trained professionals to ensure maximum safety.",
      },
      {
        question: "Do I need to vacate my home during treatment?",
        answer:
          "Not always. For most herbal treatments, you can stay inside. For chemical-based treatments, our team will guide you properly.",
      },
    ],
  },
  "Pricing & Guarantee": {
    icon: <FaLeaf className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "How much does pest control cost?",
        answer:
          "Pricing depends on the type of pest, area covered, and treatment required. We provide affordable, customized packages.",
      },
      {
        question: "Do you offer service guarantees?",
        answer:
          "Yes, we provide a service warranty depending on the treatment. If pests return within the warranty period, we re-treat at no extra cost.",
      },
      {
        question: "Do you provide annual maintenance contracts (AMC)?",
        answer:
          "Yes! Our AMC packages ensure year-round protection against pests with scheduled visits and priority support.",
      },
    ],
  },
  "Support": {
    icon: <FaPhoneAlt className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "How can I book a service?",
        answer:
          "You can call us directly, book online, or reach us via WhatsApp for instant support.",
      },
      {
        question: "Do you provide emergency pest control?",
        answer:
          "Yes, we offer same-day and emergency pest control services in most locations.",
      },
      {
        question: "Where do you operate?",
        answer:
          "We Secure Pest Control serves Delhi-NCR and nearby regions with fast response times.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Our Services");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section className="relative w-full py-8 px-4 md:px-10 bg-[#f9f9f9] text-black overflow-hidden font-raleway">
      {/* Heading */}
      <div className="text-center pb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#3CB371] font-raleway tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
          Clear answers to common questions about{" "}
          <span className="text-[#3CB371] font-semibold">
            We Secure Pest Control
          </span>{" "}
          services.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-800">
        {/* Left Tabs */}
        <div className="md:w-1/3 bg-green-50 p-6 border-r border-gray-800 flex flex-col gap-4">
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileTap={{ scale: 0.97 }}
              className={`text-left w-full px-5 py-4 rounded-xl flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#277e4e] text-white shadow-lg"
                  : "bg-[#121212] text-gray-400 hover:text-white hover:bg-[#222222]"
              }`}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Right Questions */}
        <div className="md:w-2/3 p-6 sm:p-10 bg-[#f9f9f9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-800 py-4"
                >
                  <button
                    className="w-full flex cursor-pointer justify-between items-center text-left font-medium text-base sm:text-lg"
                    onClick={() =>
                      setOpenIndex(index === openIndex ? null : index)
                    }
                  >
                    {faq.question}
                    <span className="text-gray-800 text-2xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 mt-3 text-sm leading-relaxed overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
