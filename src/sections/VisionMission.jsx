import React from "react";
import { Eye, Target } from "lucide-react";

function VisionMission() {
  return (
    <section id="vision" className="bg-blue-800 text-gray-900 py-20">

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Our Vision & Mission
        </h2>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">

          {/* Vision Card */}
          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg">
            
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl text-gray-900 font-semibold">Vision</h3>
            </div>

            <p className="mt-4 leading-relaxed">
              To become a recognized industry leader and game changer in the construction 
              and mining sector by delivering integrated services and improving business 
              performance through strategy, operations, and cost optimization.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg">

            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl text-gray-950 font-semibold">Mission</h3>
            </div>

            <ul className="mt-4 space-y-3 text-gray-900">
              <li>• Deliver customized, best-practice solutions</li>
              <li>• Build long-term client relationships</li>
              <li>• Consistently exceed client expectations</li>
              <li>• Offer a fully integrated service portfolio</li>
              <li>• Grow through innovation and expansion locally and globally</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisionMission;