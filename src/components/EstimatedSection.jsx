import React from "react";
import bg from "../assets/home/h2.jpg";

const services = [
  { title: "Termite Control" },
  { title: "Cockroach Control" },
  { title: "Rats Control" },
  { title: "Flies Control" },
  { title: "Bedbugs Treatment" },
  { title: "Silverfish Control" },
  { title: "Ants Control" },
  { title: "Lizard Control" },
  { title: "Snake Control" },
];

const EstimateSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-gradient-to-br from-green-50 to-white">
      {/* Left Image Side */}
      <div
        className="relative w-full lg:w-1/2 flex items-center justify-center h-[280px] sm:h-[350px] lg:h-auto"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/70 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center lg:text-left text-white space-y-4 px-4 lg:px-12 py-6 lg:py-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-red-600 tracking-wide">
            Quick Provide Pest Control
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
            Protect your home & business with safe, eco-friendly pest control
            solutions. Quick service, lasting results, trusted by clients across India.
          </p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-10 px-6 lg:px-12 bg-white">
        <div className="w-full max-w-xl bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-6 border-b-2 border-[#3CB371] pb-2">
            Request a Quick Estimate
          </h2>

          <form
            action="https://formsubmit.co/Quickprovidepestcontrol@gmail.com"
            method="POST"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://quickprovidepestcontrolservice.in"
            />

            {/* Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                name="Name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="Phone"
                required
                placeholder="Enter your phone"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Address (Full width) */}
            <div className="sm:col-span-2">
              <label className="block font-semibold text-gray-700 mb-1">
                Address *
              </label>
              <input
                type="text"
                name="Address"
                required
                placeholder="Enter your address"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                name="Preferred Date"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Select Service *
              </label>
              <select
                name="Service"
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              >
                <option value="">-- Select a Service --</option>
                {services.map((s, idx) => (
                  <option key={idx} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Message (Full width) */}
            <div className="sm:col-span-2">
              <label className="block font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="Message"
                rows="4"
                placeholder="Describe your requirement"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3CB371] shadow-sm"
              ></textarea>
            </div>

            {/* Submit Button (Full width) */}
            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-800 text-white font-semibold px-10 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
