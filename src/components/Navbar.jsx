// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/doc/mlogo.png"

const navItemsLeft = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About ", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-1" /> },
];

const navItemsRight = [
  { name: "Gallery", path: "/gallery", icon: <FaEnvelope className="inline mr-1" /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer relative transition flex items-center gap-1 px-2 py-1 
    ${pathname === path ? "text-[#2ECC71] font-semibold" : "text-[#1C1C1C] hover:text-[#004C8C]"}
    after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#2ECC71] after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <>
      {/* 🔹 Slim Top Header */}
      <div className="w-full bg-gradient-to-r from-[#004C8C] via-[#2ECC71] to-[#004C8C] text-white font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-1 px-4 text-xs md:text-sm">
          <p className="flex items-center gap-2">
            📞 <a href="tel:+918178290067" className="hover:underline">+91 81782 90067</a>
          </p>
          <a href="mailto:Quickprovidepestcontrolservice@gmail.com" className="flex items-center gap-2 hover:underline">
            ✉️ Quickprovidepestcontrolservice@gmail.com
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="w-full px-4 py-1 md:px-12  bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Items */}
          <ul className="hidden md:flex gap-6 text-sm font-medium uppercase">
            {navItemsLeft.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={navLinkClasses(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Brand */}
        <Link to="/" className="flex items-center gap-2">
  <img
    src={logo} 
    alt="WeSecure Pest Control Logo"
    className="h-16 w-auto"
  />
          <span className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2ECC71] to-[#004C8C]">
        QPPCS
      </span>
</Link>


          {/* Right Items */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium uppercase">
              {navItemsRight.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={navLinkClasses(item.path)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3 ml-6">
              {Object.entries(socialLinks).map(([k, url]) => {
                const Icon =
                  k === "facebook" ? FaFacebookF : k === "instagram" ? FaInstagram : FaLinkedinIn;
                return (
                  <a
                    key={k}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F9F9] text-[#1C1C1C] shadow hover:bg-[#2ECC71] hover:text-white transition"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-[#1C1C1C]">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* 🔹 Mobile Panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Slide-out */}
            <div
              ref={panelRef}
              className="w-72 h-full bg-gradient-to-b from-white to-[#F9F9F9] shadow-xl px-6 py-4 flex flex-col"
            >
              {/* Mobile brand row */}
              <div className="flex justify-between items-center">
                <Link to="/" className="text-lg font-bold text-[#004C8C]">
                  WeSecure Pest Control
                </Link>
                <FaTimes
                  className="text-xl text-[#1C1C1C] cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4" />

              {/* Mobile Nav Items */}
              <nav className="flex flex-col gap-3 text-sm">
                {[...navItemsLeft, ...navItemsRight].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 ${
                      pathname === item.path
                        ? "font-semibold text-[#2ECC71]"
                        : "text-[#1C1C1C]"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Quick WhatsApp */}
              <div className="mt-6">
                <a
                  href="https://wa.me/918585989686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold py-2 shadow hover:opacity-95 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Mobile Social */}
              <div className="mt-auto pt-4 border-t">
                <div className="flex gap-3 mt-3">
                  {Object.entries(socialLinks).map(([k, url]) => {
                    const Icon =
                      k === "facebook" ? FaFacebookF : k === "instagram" ? FaInstagram : FaLinkedinIn;
                    return (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F0F0F0] text-[#1C1C1C] hover:bg-[#004C8C] hover:text-white transition"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
