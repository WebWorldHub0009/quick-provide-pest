// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  { name: "Rohit Malhotra", title: "Homeowner, Delhi", text: "WeSecure Pest Control eliminated our termite problem with precision and care. Truly professional service!" },
  { name: "Simran Kaur", title: "Restaurant Owner, Chandigarh", text: "Our kitchen had a cockroach issue. Their team was quick, effective, and the results lasted!" },
  { name: "Aditya Sharma", title: "Doctor, Gurgaon", text: "I had mosquito issues at my clinic. They resolved it completely and the staff was very polite." },
  { name: "Neha Gupta", title: "Businesswoman, Noida", text: "Highly impressed with their eco-friendly solutions. No chemical smell and safe for kids." },
  { name: "Karan Mehta", title: "Hotel Owner, Jaipur", text: "Their pest control service was excellent. Guests can now enjoy a hygienic stay." },
  { name: "Pooja Nair", title: "Teacher, Lucknow", text: "Affordable, professional, and quick! They gave us peace of mind at home." },
  { name: "Rahul Verma", title: "Shop Owner, Mumbai", text: "We had a rat infestation at our store. Their rodent control was very effective and long-lasting." },
  { name: "Meera Joshi", title: "Fashion Designer, Ahmedabad", text: "They handled my studio with care, making it pest-free while protecting delicate fabrics." },
  { name: "Arjun Patel", title: "Student, Bangalore", text: "My PG had a bedbug problem. Their treatment worked perfectly, and I could sleep peacefully again." },
  { name: "Priya Singh", title: "Café Owner, Hyderabad", text: "Their kitchen-safe pest solutions are a lifesaver for our café. No downtime and zero pests." },
  { name: "Vikram Chauhan", title: "IT Professional, Pune", text: "Professional and timely. They inspected every corner of my flat and solved a recurring ant issue." },
  { name: "Anjali Sharma", title: "HR Manager, Kolkata", text: "WeSecure Pest Control now handles all our office pest needs. Reliable, consistent, and highly recommended." },
];


export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-10 bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4F6] px-4 md:px-10 font-[Raleway] overflow-hidden">
      {/* ✨ Background Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#3CB371]/10 via-transparent to-[#003366]/10"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#3CB371]/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#003366]/10 blur-2xl rounded-full animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] drop-shadow-sm">
          What Our Clients <span className="text-[#3CB371]">Say About Us</span>
        </h2>
        <p className="italic text-[#4A4A4A] mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          “Trusted across India for safe, eco-friendly, and reliable pest control services 
          — keeping your homes and businesses pest-free.”
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
              className="rounded-2xl p-8 h-full bg-white shadow-md border border-gray-200
              text-[#1C1C1C] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <FaQuoteLeft className="text-3xl mb-4 text-[#3CB371]" />
              <p className="mb-6 italic text-gray-700 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <p className="font-semibold text-lg text-[#003366]">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
