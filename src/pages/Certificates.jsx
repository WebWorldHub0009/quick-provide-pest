// src/pages/CertificatePage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import lic1 from "../assets/doc/lic.jpg";
import udyam from "../assets/doc/udyam.jpg";
import lic2 from "../assets/doc/li2.jpg";
import CertificateHero from "../components/CertificateHero";

const certificates = [
  {
    id: 1,
    name: "Pest Control License",
    description: "Government-approved license ensuring legal compliance and customer trust.",
    file: lic1,
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Udyam Registration",
    description:
      "Udyam Registration Certificate under the Ministry of MSME, proving Quick Provide Pest Control as a verified enterprise.",
    file: udyam,
    tag: "MSME Verified",
  },
  {
    id: 3,
    name: "Operational Certificate",
    description: "Official authorization for providing certified pest control services.",
    file: lic2,
    tag: "Certified",
  },
];

const CertificatePage = () => {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* Hero */}
      <CertificateHero />

      {/* Certificates Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f9fafc] to-white py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16" id="docs">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 uppercase tracking-wide">
              Verified <span className="text-[#3CB371]">Certificates</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              At{" "}
              <span className="font-bold text-[#3CB371]">
                Quick Provide Pest Control
              </span>
              , we value{" "}
              <span className="text-[#3CB371] font-semibold">
                transparency & trust
              </span>
              . Explore our official documents that validate our compliance and
              premium service standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {certificates.map(({ id, name, description, file, tag }) => (
              <div
                key={id}
                className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse">
                  {tag}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <HiDocumentText className="text-[#3CB371] text-4xl" />
                  <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-base leading-relaxed flex-1">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={() => setPreviewFile(file)}
                    className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#3CB371] to-[#2e9e5e] hover:from-[#2e9e5e] hover:to-[#267a49] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition"
                  >
                    <FaEye />
                    View
                  </button>

                  <a
                    href={file}
                    download
                    className="w-full sm:w-auto flex-1 border border-[#3CB371] text-[#3CB371] hover:bg-[#3CB371] hover:text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow transition"
                  >
                    <FaDownload />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="relative bg-gradient-to-r from-[#1C1C1C] via-[#111111] to-[#1C1C1C] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-[#3CB371] text-5xl mb-4" />
            <h3 className="text-xl font-bold">Government Approved</h3>
            <p className="mt-2 text-gray-300 text-sm">
              All our certificates are verified and approved by government
              authorities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-400 text-5xl mb-4" />
            <h3 className="text-xl font-bold">100% Authentic</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Genuine legal documents that ensure transparency and trust.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserTie className="text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold">Trusted Brand</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Serving thousands of happy customers with credibility for years.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatePage;
