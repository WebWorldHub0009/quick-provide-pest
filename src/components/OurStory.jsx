// src/components/OurStory.jsx
import React from "react";
import imgRight from "../assets/home/wp1.jpg";

const OurStory = () => {
  return (
    <section className="bg-white text-gray-700 px-6 md:px-12 lg:px-20 py-12 font-raleway">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Our Mission, <br />
            Your {" "}
            <span className="text-green-600">
              Pest-Free
            </span>{" "}
            Future
          </h2>

          {/* Content */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            At <span className="font-semibold text-green-600">WeSecure Pest Control</span>, 
            we’re not just about removing pests — we’re about building 
            healthier, safer, and more sustainable spaces for families and businesses. 
          </p>
          <p className="mt-4 max-w-lg text-lg leading-relaxed">
            With proven expertise, eco-friendly methods, and a customer-first 
            approach, our story is one of trust, care, and long-lasting protection.
          </p>
        </div>

        {/* Right Large Image with Caption Below */}
        <div className="flex flex-col">
          <img
            src={imgRight}
            alt="Our Story Right"
            className="w-full h-[350px] object-cover rounded-xl shadow-lg"
          />
          <p className="mt-4 text-sm italic text-gray-800 max-w-md">
            Every treatment we provide reflects our promise — precision, 
            protection, and peace of mind.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200 mt-8"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-8">
        <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-green-600">15+</h3>
          <p className="mt-2 text-sm text-gray-600">
            Years of Expertise <br />
            Building trust with lasting pest solutions.
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-green-600">5000+</h3>
          <p className="mt-2 text-sm text-gray-600">
            Happy Customers <br />
            Homes & businesses kept safe and secure.
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-green-600">100%</h3>
          <p className="mt-2 text-sm text-gray-600">
            Eco-Friendly Solutions <br />
            Sustainable treatments, safe for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
