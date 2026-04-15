import React from "react";
import samsung from "../images/samsung-1.jpg";
import gaggenau from "../images/gaggenau-1.jpg";
import liebherr from "../images/liebherr-1.jpg";
import miele from "../images/miele-1.jpg";
import siemens from "../images/siemens-1.jpg";
import smeg from "../images/smeg-1.jpg";
import speedqueen from "../images/speed-queen-1.jpg";
import whirlpool from "../images/whirlpool-1.jpg";

const brands = [
  samsung,
  gaggenau,
  liebherr,
  miele,
  siemens,
  smeg,
  speedqueen,
  whirlpool,
];

function WhatWeFix() {
  return (
    <section className="bg-background-2 py-16 px-6 text-center">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          We Fix All Major Brands
        </h2>
        <p className="text-slate-900 max-w-xl mx-auto">
          Our technicians are experienced in repairing appliances from all leading brands.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-slate-800 h-20 rounded-xl flex items-center justify-center hover:scale-105 transition"
          >
            <img
              src={brand}
              alt="brand logo"
              className="h-full w-full rounded-xl object-contain  hover:grayscale-0 transition object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeFix;