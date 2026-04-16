import React from "react";
import hero_img from "../images/pexels-abdullahcadirci-7795496.jpg"

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative min-h-screen text-white">

      {/* Background Image */}
      <img
      loading="lazy"
        src={hero_img}
        alt="Engineering and construction"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-screen px-6 md:px-12 max-w-5xl">

        {/* Company Name */}
        <h2 className="text-sm md:text-lg text-gray-300 uppercase tracking-widest">
          Dezwil Engineering Construction Pty Ltd
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
          Engineering Solutions for Mining and Industry
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          We deliver Structural, Mechanical, Electrical, Instrumentation, and Civil services with a client-first approach, focused on quality, safety, and on-time delivery.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          
          <button
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-red-700 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            Request a Quote
          </button>

          <button
            onClick={scrollToServices}
            className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            View Services
          </button>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;