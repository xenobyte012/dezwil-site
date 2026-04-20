import React, { useEffect, useState, useRef } from "react";

import img_1 from "../images/img-1.jpg";
import img_2 from "../images/img-2.jpg";
import img_4 from "../images/img-4.jpg";
import img_5 from "../images/img-5.jpg";
import img_8 from "../images/img-8.jpg";
import img_9 from "../images/img-9.jpg";

import img_12 from "../images/img-12.jpg";
import img_13 from "../images/img/IMG-20260419-WA0009.jpg";
import img_16 from "../images/img/IMG-20260419-WA0012.jpg";
import img_17 from "../images/img/IMG-20260419-WA0013.jpg";
import img_18 from "../images/img/IMG-20260419-WA0014.jpg";
import img_19 from "../images/img/IMG-20260419-WA0015.jpg";
import img_20 from "../images/img/IMG-20260419-WA0016.jpg";
import img_21 from "../images/img/IMG-20260419-WA0017.jpg";
import img_22 from "../images/img/IMG-20260419-WA0018.jpg";
import img_23 from "../images/img/IMG-20260419-WA0019.jpg";
import img_24 from "../images/img/IMG-20260419-WA0020.jpg";
import img_25 from "../images/img/IMG-20260419-WA0021.jpg";
import img_26 from "../images/img/IMG-20260419-WA0022.jpg";
import img_27 from "../images/img/IMG-20260419-WA0023.jpg";
import img_28 from "../images/img/IMG-20260419-WA0024.jpg";
import img_29 from "../images/img/IMG-20260419-WA0025.jpg";
import img_30 from "../images/img/IMG-20260419-WA0026.jpg";
import img_31 from "../images/img/IMG-20260419-WA0027.jpg";
import img_32 from "../images/img/IMG-20260419-WA0028.jpg";
import img_33 from "../images/img/IMG-20260419-WA0029.jpg";
import img_34 from "../images/img/IMG-20260419-WA0030.jpg";
import img_35 from "../images/img/IMG-20260419-WA0031.jpg";
import img_36 from "../images/img/IMG-20260419-WA0036.jpg";
import img_37 from "../images/img/IMG-20260419-WA0033.jpg";
import img_38 from "../images/img/IMG-20260419-WA0034.jpg";
import img_39 from "../images/img/IMG-20260419-WA0035.jpg";
import img_40 from "../images/img/IMG-20260419-WA0032.jpg";
import img_41 from "../images/img/IMG-20260419-WA0037.jpg";
import img_42 from "../images/img/IMG-20260419-WA0038.jpg";
import img_43 from "../images/img/IMG-20260419-WA0039.jpg";
import img_44 from "../images/img/IMG-20260419-WA0040.jpg";
import img_45 from "../images/img/IMG-20260419-WA0041.jpg";
import img_46 from "../images/img/IMG-20260419-WA0042.jpg";
import img_47 from "../images/img/IMG-20260419-WA0043.jpg";
import img_48 from "../images/img/IMG-20260419-WA0044.jpg";
import img_49 from "../images/img/IMG-20260419-WA0045.jpg";
import img_50 from "../images/img/IMG-20260419-WA0046.jpg";
import img_51 from "../images/img/IMG-20260419-WA0047.jpg";
import img_52 from "../images/img/IMG-20260419-WA0048.jpg";
import img_53 from "../images/img/IMG-20260419-WA0049.jpg";
import img_54 from "../images/img/IMG-20260419-WA0050.jpg";
import img_55 from "../images/img/IMG-20260419-WA0051.jpg";
import img_56 from "../images/img/IMG-20260419-WA0052.jpg";


function Gallary() {
  const projects = [
    { img: img_1, title: "DML Pilot Plant 🏭" },
    { img: img_2, title: "Acid Plant 🧪" },
    { img: img_4, title: "Converter Plant ⚙️" },
    { img: img_5, title: "Steel Installation 🔩" },
    { img: img_8, title: "Security Fencing 🚧" },
    { img: img_9, title: "Heat Extraction Fans 🌬️" },
    { img: img_12, title: "Engineering Works 📐" },
    { img: img_13, title: "Structural Steel Fabrication 🏢" },
    { img: img_16, title: "Instrumentation & Control 📊" },
    { img: img_17, title: "Civil Construction & Fencing 🏡" },
    { img: img_18, title: "Project Management 📋" },
    { img: img_19, title: "Shutdown Services 🛑" },
    { img: img_20, title: "Health & Safety Compliance 🦺" },
    { img: img_21, title: "Fuel Tank Cleaning ⛽" },
    { img: img_22, title: "Industrial Deep Cleaning 🧹" },
    { img: img_23, title: "General Supply & Logistics 📦" },
    { img: img_24, title: "Smelter Plant Operations 🔥" },
    { img: img_25, title: "Marikana Concentrator ⛏️" },
    { img: img_26, title: "Underground Mining Support 🪨" },
    { img: img_27, title: "Surface Plant Maintenance 🏭" },
    { img: img_28, title: "Valterra Platinum Site 💎" },
    { img: img_29, title: "Sibanye Stillwater Operations ⛰️" },
    { img: img_30, title: "Rustenburg Projects 🏙️" },
    { img: img_31, title: "North West Region Works 🗺️" },
    { img: img_32, title: "Limpopo Engineering Services 🌍" },
    { img: img_33, title: "Light Pole Installation 💡" },
    { img: img_34, title: "Heat Extraction Systems 🔥" },
    { img: img_35, title: "Generator Installation 🔌" },
    { img: img_36, title: "Transformer Maintenance ⚡" },
    { img: img_37, title: "Cable Rack Systems 🧵" },
    { img: img_38, title: "SCADA System Upgrades 🖥️" },
    { img: img_39, title: "Automation & Control Systems 🤖" },
    { img: img_40, title: "Material Handling Design 🚛" },
    { img: img_41, title: "HVAC Engineering ❄️" },
    { img: img_42, title: "Production Layout Planning 📐" },
    { img: img_43, title: "Storage System Design 📦" },
    { img: img_44, title: "Road Infrastructure 🛣️" },
    { img: img_45, title: "Bridge Construction 🌉" },
    { img: img_46, title: "Pipeline Installation 🚰" },
    { img: img_47, title: "Building Development 🏢" },
    { img: img_48, title: "Mining Shaft Maintenance ⛏️" },
    { img: img_49, title: "Processing Plant Support 🏭" },
    { img: img_50, title: "Zero Harm Safety Initiative 🛡️" },
    { img: img_51, title: "Environmental Compliance 🌿" },
    { img: img_52, title: "Community Development 🤝" },
    { img: img_53, title: "Education Access Programs 📚" },
    { img: img_54, title: "Future Leaders Initiative 🌟" },
    { img: img_55, title: "Black-Owned Excellence ✊🏿" },
    { img: img_56, title: "Industry Game Changer 🎯" },

  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const intervalRef = useRef(null);

  // Detect touch device on mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, projects.length]);

  // Mouse event handlers – only used if NOT a touch device
  const handleMouseEnter = () => {
    if (!isTouchDevice) setPaused(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setPaused(false);
  };

  return (
    <section id="projects" className="bg-blue-700 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Projects & Achievements 🏆
        </h2>

        <p className="mt-6 text-center text-gray-100 max-w-3xl mx-auto">
          We have successfully delivered major industrial and mining projects including plant installations,
          structural work, and maintenance operations.
        </p>

        <div
          className="mt-12 max-w-3xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-[420px]">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0"
                }`}
              >
                <img
                  src={project.img}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "bg-white w-8" : "bg-white/50 w-3"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center font-semibold text-orange-300">
          ✅ All projects completed safely, on time, and with ZERO injuries.
        </p>
      </div>
    </section>
  );
}

export default Gallary;