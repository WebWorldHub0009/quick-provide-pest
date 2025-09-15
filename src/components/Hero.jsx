// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShieldAlt,
  FaLeaf,
  FaUserShield,
  FaBug,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";

// ✅ Pest Control Backgrounds
import heroImg1 from "../assets/home/h1.jpg";
import heroImg2 from "../assets/home/h2.jpg";
import heroImg3 from "../assets/home/h3.jpg";
import heroImg4 from "../assets/home/h4.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];

  // ✅ Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const cards = [
    {
      icon: <FaBug className="text-3xl text-[#2ECC71]" />,
      title: "Termite Control",
      desc: "Advanced anti-termite treatments to safeguard your property.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#2ECC71]" />,
      title: "Rodent & Cockroach",
      desc: "Long-lasting solutions against rodents and cockroaches.",
    },
    {
      icon: <FaLeaf className="text-3xl text-[#2ECC71]" />,
      title: "Mosquito & Bed Bugs",
      desc: "Eco-friendly treatments for mosquitoes and bed bugs.",
    },
    {
      icon: <FaUserShield className="text-3xl text-[#2ECC71]" />,
      title: "Certified Experts",
      desc: "Trained professionals ensuring safety and reliability.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden font-franklin">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img}
            alt="Quick Provide Pest Control"
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* ✅ Social Media (Desktop) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-5 text-white z-50 hidden md:flex">
        <FaFacebookF className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        <FaTwitter className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        <FaInstagram className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
        <FaYoutube className="hover:text-[#2ECC71] transition text-2xl cursor-pointer" />
      </div>

      {/* ✅ Slider Dots (Desktop) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 hidden md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#2ECC71] scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>

      {/* ✅ Hero Text */}
      <div className="relative bottom-20 z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Tagline */}
        <h2 className="font-epunda text-[#2ECC71] text-sm md:text-xl tracking-widest uppercase font-bold drop-shadow-md">
          Quick Provide Pest Control
        </h2>

        {/* Typewriter Heading */}
        <h1 className="font-epunda text-2xl md:text-5xl mt-3 font-extrabold uppercase leading-tight drop-shadow-xl">
          <Typewriter
            words={[
              "Fast. Reliable. Eco-Friendly.",
              "Your Home. Pest Free.",
              "Trusted Experts Since 2021",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>

        {/* Description */}
        <p className="mt-5 text-sm md:text-lg max-w-3xl md:max-w-4xl text-gray-200 leading-relaxed">
          We specialize in safe, eco-friendly, and premium pest control services.
          From termites, mosquitoes, and rodents to household pests – our mission
          is to protect your family, your business, and your health with
          unmatched care.
        </p>

        {/* ✅ CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 bg-[#2ECC71] hover:bg-green-600 rounded-full text-white font-franklin shadow-lg transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-franklin shadow-lg transition"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* ✅ Feature Cards (Desktop Grid) */}
      <div className="absolute bottom-16 w-full hidden md:flex flex-wrap justify-center gap-6 px-6 z-20">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-[#2ECC71]/40 hover:border-[#2ECC71] text-white p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {card.icon}
              <h3 className="font-epunda text-lg font-bold uppercase tracking-wide">
                {card.title}
              </h3>
            </div>
            <p className="font-franklin text-sm text-gray-200">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* ✅ Feature Cards (Mobile Slider) */}
    {/* ✅ Feature Cards (Mobile Slider) */}
<div className="absolute bottom-20 w-full px-6 z-20 md:hidden">
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={15}
    slidesPerView={1.15}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    className="pb-10"
  >
    {cards.map((card, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white/10 backdrop-blur-md border border-[#2ECC71]/40 hover:border-[#2ECC71] text-white p-6 rounded-2xl w-full hover:scale-105 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-3">
            {card.icon}
            <h3 className="font-epunda text-base sm:text-lg font-bold uppercase tracking-wide">
              {card.title}
            </h3>
          </div>
          <p className="font-franklin text-xs sm:text-sm text-gray-200">
            {card.desc}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* ✅ Bottom Info Bar */}
<div className="absolute bottom-0 left-0 w-full bg-black/40 py-3 px-4 text-center text-xs sm:text-sm md:text-base text-gray-300 tracking-wide flex flex-wrap justify-center gap-3 md:gap-12 font-franklin">
  <span className="hover:text-[#2ECC71] transition">Eco-Friendly</span>
  <span className="hover:text-[#2ECC71] transition">Trusted Experts</span>
  <span className="hover:text-[#2ECC71] transition">Quick Response</span>
  <span className="hover:text-[#2ECC71] transition">24/7 Support</span>
</div>

    </section>
  );
}
