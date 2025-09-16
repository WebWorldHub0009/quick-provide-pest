// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  { name: "Amit Khanna", title: "Apartment Owner, Delhi", text: "Quick Provide Pest Control handled our termite issue with amazing precision. Highly professional and reliable service!" },
  { name: "Ritika Sen", title: "Café Owner, Mumbai", text: "Their eco-friendly cockroach treatment worked wonders in our café. Safe, quick, and zero downtime." },
  { name: "Dr. Manish Suri", title: "Clinic Owner, Lucknow", text: "Mosquitoes around my clinic were a big issue. Their team resolved it completely. Very satisfied!" },
  { name: "Shreya Gupta", title: "Interior Designer, Gurgaon", text: "I love how safe their pest control is. No chemical smell, safe for kids and pets — and highly effective." },
  { name: "Rajiv Bansal", title: "Hotel Manager, Jaipur", text: "Guests at our hotel now enjoy a hygienic stay. Their team was quick, discreet, and professional." },
  { name: "Neha Sharma", title: "Teacher, Chandigarh", text: "Affordable and effective service. They gave us peace of mind at home. Highly recommended!" },
  { name: "Sandeep Yadav", title: "Shop Owner, Pune", text: "Rats were troubling our store badly. Their rodent control service worked perfectly and results are long-lasting." },
  { name: "Meenal Desai", title: "Boutique Owner, Ahmedabad", text: "They handled my boutique with utmost care — pest-free environment without harming fabrics." },
  { name: "Arjun Reddy", title: "Student, Bangalore", text: "Our PG had a bedbug nightmare. Their treatment worked so well — I finally sleep peacefully again." },
  { name: "Pooja Verma", title: "Restaurant Owner, Hyderabad", text: "Kitchen-safe pest control that saved us from cockroaches. Excellent team and results." },
  { name: "Vivek Chawla", title: "IT Professional, Noida", text: "Very thorough inspection and effective ant treatment. Their staff was polite and efficient." },
  { name: "Ananya Iyer", title: "HR Head, Kolkata", text: "We trust Quick Provide Pest Control for all our office needs. Consistent and dependable service!" },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-14 bg-gradient-to-b from-white via-[#F9FAFB] to-[#EEF7F2] px-4 md:px-10 font-[Raleway] overflow-hidden">
      {/* ✨ Background Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#3CB371]/10 via-transparent to-[#003366]/10"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#3CB371]/25 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#003366]/15 blur-2xl rounded-full animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] drop-shadow-sm">
          What Our Clients <span className="text-red-600">Say About Us</span>
        </h2>
        <p className="italic text-[#4A4A4A] mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          “Trusted across India for safe, eco-friendly, and reliable pest control services —
          keeping your homes and businesses completely pest-free.”
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative rounded-2xl p-8 h-full bg-white 
              border border-gray-200 text-[#1C1C1C] shadow-md
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Floating Badge */}
              <span className="absolute -top-5 left-5 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                ★ Verified Client
              </span>

              <FaQuoteLeft className="text-3xl mb-4 text-blue-800" />
              <p className="mb-6 italic text-gray-700 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <p className="font-semibold text-lg text-[#003366]">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
