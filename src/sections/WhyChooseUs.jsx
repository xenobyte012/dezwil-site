import React from "react";
import {
  Clock,
  ShieldCheck,
  Wrench,
  BadgeCheck,
  DollarSign,
  Truck,
} from "lucide-react";

// Features data (clean + business aligned)
const features = [
  {
    icon: Clock,
    title: "Same-Day Repairs",
    description:
      "We offer fast and reliable same-day repair services to get your appliances working again quickly.",
  },
  {
    icon: Wrench,
    title: "Certified Technicians",
    description:
      "Our skilled technicians are trained to repair all major appliance brands with precision.",
  },
  {
    icon: ShieldCheck,
    title: "6-Month Guarantee",
    description:
      "We stand by our work with a service guarantee to give you peace of mind.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Costs",
    description:
      "Transparent pricing with no surprises — what we quote is what you pay.",
  },
  {
    icon: Truck,
    title: "We Come To You",
    description:
      "Our team comes directly to your home for convenient and hassle-free service.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Service",
    description:
      "We are trusted by many customers for delivering consistent and high-quality repairs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background-1 text-sub-heading-2 py-16 px-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          Why Choose Us
        </h2>
        <p className="text-heading-1 max-w-2xl mx-auto">
          Reliable, fast, and professional appliance repair services you can trust.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="mb-4 text-blue-400">
                <Icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}