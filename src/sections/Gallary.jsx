import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gallary_1 from "../images/test-1 (2).jpg";
import gallary_2 from "../images/test-1 (2).jpg";
import gallary_3 from "../images/test-1 (2).jpg";
import gallary_4 from "../images/test-1 (2).jpg";
import gallary_5 from "../images/test-1 (2).jpg";
import gallary_6 from "../images/test-1 (2).jpg";

const images = [
  "https://joburgappliancerepair.co.za/wp-content/uploads/2025/05/appliance-repair-1024x683.jpg",
  "https://appliancerepairtechnologies.co.za/wp-content/uploads/2021/03/What-to-expect-for-your-appliance-repair-appointment.jpg",
  "https://appliancepros.co.za/wp-content/uploads/2022/12/washing-machine-repair.jpg",
  "https://www.smartappliance.co.za/wp-content/uploads/elementor/thumbs/appliance-repair-la-lucia-fridge-and-more--jpg-qlhok7b8v16m099pp79xqq1s9ydytqybhjuwihy3nk.webp",
  "https://bertelsmidrand.co.za/wp-content/uploads/2024/01/20240123_153828-1024x768.jpg",
  "https://i0.wp.com/applianceman.co.za/wp-content/uploads/2025/12/Appliance-Man-12.jpg?resize=1024%2C683&ssl=1",
];

export default function Gallery() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          Our Work Gallery
        </h2>
        <p className="mt-2 text-gray-300">
          Take a look at some of our recent appliance repair work
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-blue-600 transition p-3 rounded-full z-10"
        >
          <ChevronLeft />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] md:w-[350px] h-[350px] rounded-xl overflow-hidden group"
            >
              <img
                src={img}
                alt="images"
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-semibold">
                  View Work
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-blue-600 transition p-3 rounded-full z-10"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}