import React from "react";
import aboutUs from "../images/aboutus.jpg"

function AboutUs() {
  return (
    <section id="about" className="bg-gray-200 py-20">

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Dezwil Engineering
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Dezwil Engineering Construction Pty Ltd is a 100% black-owned company founded in 2022.
             We provide professional Structural, Mechanical, Electrical, Instrumentation, and Civil e
             ngineering services, as well as general supply.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
           With a strong client-first philosophy, we focus on delivering projects safely, on time, and within budget while maintaining
           the highest standards of quality and reliability.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
           Our skilled management team and experienced professionals enable us to handle both small and large-scale projects in the mining and construction sectors. We are committed to safety, environmental responsibility, and community development – especially improving access to education.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={aboutUs}
            alt="Engineering work"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;