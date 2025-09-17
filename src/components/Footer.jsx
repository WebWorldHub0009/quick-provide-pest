// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

// Quick Provide Pest Control Services
const services = [
  { title: "Termite Control", slug: "termite-control" },
  { title: "Cockroach Control", slug: "cockroach-control" },
  { title: "Rats Control", slug: "rats-control" },
  { title: "Flies Control", slug: "flies-control" },
  { title: "Bedbugs Treatment", slug: "bedbugs-treatment" },
 { title: "Herbal & Gel Treatment", slug: "herbal-gel-treatment" },
  { title: "Water Tank Cleaning", slug: "water-tank-cleaning" },
];

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="relative pt-12 pb-12 px-6 md:px-16 font-[poppins] text-black overflow-hidden">
      {/* Background Image (optional) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${""})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About Section */}
        <div className="flex flex-col space-y-4 text-black">
          <p className="text-2xl md:text-4xl font-raleway font-semibold text-blue-800 tracking-wide">
            Quick Provide Pest Control
          </p>
          <p className="leading-relaxed text-black text-lg mt-2">
            Trusted pest control solutions to protect your home and business
            with advanced, eco-friendly, and effective services.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=919958717631&text=Hello%20Quick%20Provide%20Pest%20Control",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-black transition duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Webmail */}
          <div className="mt-4">
            <a
              href="https://webmail.quickprovidepestcontrolservice.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-800 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
            >
              <FaEnvelope /> Webmail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-black">
          <h4 className="font-semibold font-raleway text-3xl mb-4 text-blue-800">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              ["Certificates", "/certificate", <FaCertificate />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-black hover:text-blue-800 transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold font-raleway text-3xl mt-6 mb-2 text-blue-800">
            Business Info
          </h4>
          <ul className="space-y-2 text-black">
            <li>UDYAM: DL-08-0095527</li>
            <li>GSTIN: 07BDUPK7506B1ZH</li>
            <li>License No: 10688</li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-black">
          <h4 className="font-semibold font-raleway text-3xl mb-4 text-blue-800">
            Our Services
          </h4>
          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving className="text-blue-800" />
                <Link
                  to={`/services/${slug}`}
                  className="text-black hover:text-blue-800 transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-black">
          <h4 className="font-semibold text-3xl font-raleway mb-4 text-blue-800">
            Contact Info
          </h4>
         
          <address className="not-italic leading-relaxed mb-4">
            Anupam Plaza Building 56, Shop No. G1 Ground Floor, Opposite Azad
            Apartment, Behind Adarsh Express, Vijay Mandal Enclave, Kalu Sarai,
            New Delhi - 110016
          </address>

          {/* Emails */}
          {[
            "Quickprovidepestcontrolservice@gmail.com",
            "quickprovidepestcontrol@gmail.com"
          ].map((email, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaEnvelope className="text-blue-800" />
              <a
                href={`mailto:${email}`}
                className="hover:text-blue-800 transition duration-300"
              >
                {email}
              </a>
            </p>
          ))}

          {/* Phones */}  
          {["+919958717631", "+91 8178290067"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-800" />
              <a
                href={`tel:${num.replace(/\s/g, "")}`}
                className="hover:text-blue-800 transition duration-300"
              >
                {num}
              </a>
            </p>
          ))}

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-blue-800" /> Owner: Raj Kumar
            Choudhary
          </p>

          <div className="mb-4 flex justify-start items-center">
            <div>

            <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs text-black border-t border-gray-400 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Quick Provide Pest Control. All rights
          reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-blue-800 transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
