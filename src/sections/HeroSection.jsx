import React from "react";
import heroImage from "../images/hero-img.jpg";

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative min-h-screen text-white">

      {/* Background Image */}
      <img
        src="https://saafikcool.co.za/wp-content/uploads/2025/06/Appliance-repair-Johannesburg-and-surrounding-area.jpg.webp"
        alt="Appliance repair service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay (VERY IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      
      <div className="relative z-10 flex flex-col justify-center h-screen px-6 md:px-12 max-w-5xl">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Fast & Reliable Appliance Repair Near You
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
          Same-day service for all major brands. Affordable, professional, and trusted by homeowners.
        </p>

        {/* Trust line */}
        <p className="mt-4 text-sm text-gray-300">
          ⭐ 98% customer satisfaction | Same-day service available
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-8">
          
          <button
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            Call Now
          </button>

          <button
            onClick={scrollToContact}
            className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            📞 WhatsApp Us
          </button>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;