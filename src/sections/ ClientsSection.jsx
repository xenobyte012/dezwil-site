import React from "react";
import sibanye from "../images/Sibanye-Stillwater.svg.png"
import platinum from "../images/Valterra-Platinum-Logo.webp"
import rustenbung from "../images/Rustenburg-Local-Municipality.png"

function ClientsSection() {


  return (
    <section id="clients" className="bg-gray-200 py-20">

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Valued Partners
        </h2>

        {/* Intro */}
        <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
          We proudly partner with leading mining companies in delivering reliable engineering solutions across South Africa.
        </p>

        {/* Logos */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">

          
            <div
              
              className="bg-white w-65 h-32 rounded-2xl shadow-md flex items-center justify-center hover:shadow-xl transition"
            >
              <img
                src={sibanye}
                alt="Sibanye Stillwater"
            className={`max-h-12 w-full scale-159  object-contain opacity-80 hover:opacity-100 transition `}
              />
            </div>
             <div
            
              className="bg-white w-65 h-32 rounded-2xl shadow-md flex items-center justify-center hover:shadow-xl transition"
            >
              <img
                src={platinum}
                alt= "ValterraPlatinum"
            className={`max-h-15 w-9/10 h-full object-cover opacity-80 hover:opacity-100 transition `}
              />
              <img
                src={rustenbung}
                alt= "Rustenburg Local Municipality"
            className={`max-h-15 w-9/10 h-full object-cover opacity-80 hover:opacity-100 transition `}
              />
            </div>
          

        </div>

        {/* Location Text */}
        <p className="mt-10 text-center text-gray-600 text-sm max-w-3xl mx-auto">
          We operate across Rustenburg, Marikana, North West, and Limpopo, serving both surface plants and underground mining operations.
        </p>

      </div>
    </section>
  );
}

export default ClientsSection;