import React from "react";

import {
  Wrench,
  Hammer,
  Zap,
  Cpu,
  HardHat,
  ClipboardList,
  Settings,
  ShieldCheck,
  Droplet,
  Package,
} from "lucide-react";

function ServicesSection() {
  const services = [
    { icon: Hammer, name: "Structural Steel Fabrication & Installation" },
    { icon: Wrench, name: "Mechanical Engineering" },
    { icon: Zap, name: "Electrical Engineering" },
    { icon: Cpu, name: "Instrumentation Engineering" },
    { icon: HardHat, name: "Civil Engineering & Fencing" },
    { icon: ClipboardList, name: "Project Management" },
    { icon: Settings, name: "Plant Maintenance & Shutdown Services" },
    { icon: ShieldCheck, name: "Health & Safety Consulting" },
    { icon: Droplet, name: "Fuel Tank Cleaning & Deep Cleaning" },
    { icon: Package, name: "General Supply" },
  ];

  return (
    <section id="services" className="bg-gray-200 py-20">

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        {/* Intro */}
        <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
          We offer a wide range of professional engineering and support services 
          tailored for the mining and industrial sectors.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <Icon className="w-10 h-10 mx-auto text-blue-600" />
                <p className="mt-4 text-gray-800 font-medium">
                  {service.name}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;