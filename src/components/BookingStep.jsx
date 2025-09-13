import React from "react";
import { FaCalendarAlt, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BookingSteps() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1c1c1c] to-black py-16 px-6 text-center">
      {/* Glow Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3CB37122,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1E90FF22,transparent_70%)]" />

      {/* Heading */}
      <h4 className="text-green-400 uppercase text-sm font-semibold tracking-wider mb-3 relative z-10">
        HOW IT WORKS
      </h4>
      <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-14 relative z-10">
        Simply Book Online And Pay On The Day
      </h2>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto relative z-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center relative group">
          <div className="flex items-center justify-center bg-[#3CB37122] border border-green-500/30 w-24 h-24 rounded-full shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
            <FaCheckCircle className="text-green-400 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-white">1. Create a Booking</h3>
          <p className="text-gray-400 mt-1 max-w-xs">Quickly book online or by phone</p>
          {/* Connector */}
          <div className="hidden md:block absolute top-12 right-[-5rem] w-20 h-0.5 border-t-2 border-dashed border-green-500/50" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center relative group">
          <div className="flex items-center justify-center bg-[#3CB37122] border border-green-500/30 w-24 h-24 rounded-full shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
            <FaCalendarAlt className="text-green-400 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-white">2. Save the Date</h3>
          <p className="text-gray-400 mt-1 max-w-xs">
            Confirm your price & service date
          </p>
          {/* Connector */}
          <div className="hidden md:block absolute top-12 right-[-5rem] w-20 h-0.5 border-t-2 border-dashed border-green-500/50" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center relative group">
          <div className="flex items-center justify-center bg-[#3CB37122] border border-green-500/30 w-24 h-24 rounded-full shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
            <FaMoneyBillWave className="text-green-400 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-white">3. Pay in Person</h3>
          <p className="text-gray-400 mt-1 max-w-xs">
            Pay on the day with EFTPOS or cash
          </p>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative mt-16 bg-gradient-to-r from-green-600 to-[#1E90FF] text-white rounded-2xl px-8 py-8 flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto shadow-xl z-10">
        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
          Get Started With South Delhi Pest Control Services Today
        </h3>
        <Link
          to={"/price"}
          className="bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Book Now!
        </Link>
      </div>
    </section>
  );
}
