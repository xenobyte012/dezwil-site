import React, { useEffect, useState } from "react";
import img_1 from "../images/img-1.jpg"
import img_2 from "../images/img-2.jpg"

import img_4 from "../images/img-4.jpg"
import img_5 from "../images/img-5.jpg"

import img_8 from "../images/img-8.jpg"
import img_9 from "../images/img-9.jpg"
import img_10 from "../images/img-10.jpg"
import img_11 from "../images/img-11.jpg"
import img_12 from "../images/img-12.jpg"



function Gallary() {
   const projects = [
    { id: 1, img: img_1, title: "Project 1" },
    { id: 2, img: img_2, title: "Project 2" },
    { id: 4, img: img_4, title: "Project 4" },
    { id: 5, img: img_5, title: "Project 5" },
    { id: 8, img: img_8, title: "Project 8" },
    { id: 9, img: img_9, title: "Project 9" },
    { id: 10, img: img_10, title: "Project 10" },
    { id: 11, img: img_11, title: "Project 11" },
    { id: 12, img: img_12, title: "Project 12" },


  ];
  const projectcs = [
    {
      title: "DML Pilot Plant",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    },
    {
      title: "Acid Plant",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    },
    {
      title: "Converter Plant",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    },
    {
      title: "Steel Installation",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    },
    {
      title: "Security Fencing",
      img: "https://images.unsplash.com/photo-1581091870622-3e0d6c5b8c7b",
    },
    {
      title: "Heat Extraction Fans",
      img: "https://images.unsplash.com/photo-1581090700227-1e8b2f5d6c8a",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="bg-blue-700 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Projects & Achievements
        </h2>

        {/* Text */}
        <p className="mt-6 text-center text-gray-100 max-w-3xl mx-auto">
          We have successfully delivered major industrial and mining projects including plant installations,
          structural work, and maintenance operations.
        </p>

        {/* Single Container Animated Gallery */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-96">
            {/* Current and next images with crossfade */}
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  loading="lazy"
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Text */}
                
              </div>
            ))}
          </div>

          {/* Optional: Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Safety line */}
        <p className="mt-10 text-center font-semibold text-orange-300">
          All projects completed safely, on time, and with ZERO injuries.
        </p>
      </div>
    </section>
  );
}

export default Gallary;