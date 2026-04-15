import React from "react";
import {
  Refrigerator,
  WashingMachine,
  Flame,
  Utensils,     // ✅ replace Dishwasher
  Microwave,    // ⚠️ if error, use Box
  Snowflake,
} from "lucide-react";

const features = [
  {
    title: "Fridge Repair",
    icon: Refrigerator,
    description:
      "Fast and reliable fridge repairs to keep your food fresh and your appliance running efficiently.",
  },
  {
    title: "Washing Machine Repair",
    icon: WashingMachine,
    description:
      "We fix all washing machine issues quickly so your laundry routine stays uninterrupted.",
  },
  {
    title: "Stove & Oven Repair",
    icon: Flame,
    description:
      "Professional repair services to get your kitchen appliances working safely again.",
  },
  {
    title: "Dishwasher Repair",
    icon: Utensils, // ✅ FIXED
    description:
      "Efficient dishwasher repairs to save you time and effort in the kitchen.",
  },
  {
    title: "Microwave Repair",
    icon: Microwave, // ⚠️ if it breaks → replace with Box
    description:
      "Quick microwave fixes to restore convenient cooking in your home.",
  },
  {
    title: "Air Conditioner Repair",
    icon: Snowflake,
    description:
      "Stay cool with expert air conditioner repair and maintenance services.",
  },
];

function ServiceSection() {
  return (
    <section className="bg-slate-900 text-white py-16 px-6">
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          Our Appliance Repair Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional repair services for all major household appliances.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-row items-center">
              <div className="mb-4 text-blue-400 pr-1  ">
                <Icon size={32} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              </div>
              

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceSection;