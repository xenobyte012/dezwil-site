import React, { useEffect, useState } from "react";

// Only import images that ACTUALLY EXIST in your folder
import img_1 from "../images/img-1.jpg";
import img_2 from "../images/img-2.jpg";
import img_4 from "../images/img-4.jpg";
import img_5 from "../images/img-5.jpg";
import img_8 from "../images/img-8.jpg";
import img_9 from "../images/img-9.jpg";
import img_10 from "../images/img-10.jpg";
import img_11 from "../images/img-11.jpg";
import img_12 from "../images/img-12.jpg";

function Gallary() {
  const projects = [
    { img: img_1, title: "DML Pilot Plant 🏭" },
    { img: img_2, title: "Acid Plant 🧪" },
    { img: img_4, title: "Converter Plant ⚙️" },
    { img: img_5, title: "Steel Installation 🔩" },
    { img: img_8, title: "Security Fencing 🚧" },
    { img: img_9, title: "Heat Extraction Fans 🌬️" },
    { img: img_10, title: "Plant Maintenance 🔧" },
    { img: img_11, title: "Industrial Installation 🏗️" },
    { img: img_12, title: "Engineering Works 📐" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, projects.length]);

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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-xl font-semibold">{project.title}</p>
                </div>
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