// src/pages/Contact.jsx
import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import MapSection from "../components/MapSection";

const Contact = () => {
  return (
    <>
      <section className="w-full font-sans">
        {/* ✅ Hero Section */}
        <div className="w-full bg-gradient-to-r from-[#1F2C73] to-[#2E3A87] text-white text-center px-6 py-20 relative overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            We’d Love To Hear From You
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Whether you have a question about pest control services, partnerships,
            or anything else — our team is ready to assist you anytime.
          </p>
          <div className="absolute w-72 h-72 bg-white/10 rounded-full bottom-[-100px] right-[-80px]"></div>
        </div>

        {/* ✅ Contact Box */}
        <div className="max-w-6xl mx-auto shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden rounded-2xl">
          {/* Left Info */}
          <div className="bg-gradient-to-b from-[#1F2C73] to-[#2E3A87] text-white px-8 py-12 relative md:w-1/2 w-full">
            <h3 className="text-5xl font-bold mb-4">Contact Information</h3>
            <p className="text-white/90 text-base mb-6">
              Reach out to us today and let our experts make your space pest-free.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4 text-base mb-4">
              <HiOutlinePhone className="mt-1 text-[#E30613] text-2xl" />
              <div>
                +91 99587 17631 <br /> +91 81782 90067
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-base mb-4">
              <AiOutlineMail className="mt-1 text-[#E30613] text-2xl" />
              <div>
                Quickprovidepestcontrol@gmail.com 
                quickprovidepestcontrol@gmail.com <br />
                info@quickprovidepestcontrolservice.in
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 text-base mb-4">
              <BiMap className="mt-1 text-[#E30613] text-2xl" />
              <div>
                Anupam Plaza Building 56, Shop No. G1, Opp. Azad Apartment,
                Behind Adarsh Express, Vijay Mandal Enclave,
                Near Courier Point Arvindo Marg, Kalu Sarai, New Delhi – 110016
              </div>
            </div>

            {/* Company Details */}
            <p className="text-white/80 text-sm mt-4 leading-relaxed">
              GSTIN: 07BDUPK7506B1ZH <br />
              UDYAM: UDYAM-DL-08-0095527 <br />
              License No: 10688
            </p>
          </div>

          {/* ✅ Right Form */}
          <div className="px-8 py-12 md:w-1/2 w-full bg-[#F9F9F9]">
            <form
              className="w-full space-y-8"
              action="https://formsubmit.co/Quickprovidepestcontrol@gmail.com "
              method="POST"
            >
              {/* Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://Quickprovidepestcontrolservice.in"
              />

              {/* Name + Email in one row */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="block text-lg text-black mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#E30613] text-black outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-black mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#1F2C73] text-black outline-none py-3 text-base"
                  />
                </div>
              </div>

              {/* Phone + Address in one row */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="block text-lg text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#E30613] text-black outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-black mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Your complete address"
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#1F2C73] text-black outline-none py-3 text-base"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-lg text-black mb-2">
                  Select Service
                </label>
                <select
                  name="service"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#E30613] text-black outline-none py-3 text-base"
                >
                  <option value="">-- Choose Service --</option>
                  <option>Termite Control</option>
                  <option>Cockroach Control</option>
                  <option>Rats Control</option>
                  <option>Flies Control</option>
                  <option>Bedbugs Treatment</option>
                  <option>Herbal & Gel Treatment</option>
                  <option>Water Tank Cleaning</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg text-black mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#E30613] text-black outline-none py-3 text-base resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#E30613] to-[#1F2C73] hover:opacity-90 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Map Section */}
      <MapSection />
    </>
  );
};

export default Contact;
