import React from "react";
import img_36 from "../images/img/IMG-20260419-WA0036.jpg";
import img_58 from "../images/pp-1.jpg";
import profile from "../images/pp-2.jpg";

function TeamSection() {
  const team = [
    {
      name: "Wilson T. Selemogo",
      role: "Managing Director",
      desc: "Leads daily operations and company direction.",
      img: profile,
    },
    {
      name: "Harry Seleke",
      role: "Technical Support",
      desc: "Brings over 20 years of experience in maintenance and projects.",
      img: img_36,
    },
    {
      name: "Thabo Lengamanyane",
      role: "Administration Officer",
      desc: "Handles administrative functions and support.",
      img: img_58,
    },
  ];

  return (
    <section id="team" className="bg-blue-700 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Team
        </h2>

        <p className="text-center text-blue-100 mt-3 max-w-2xl mx-auto">
          Experienced professionals driving engineering excellence across all projects.
        </p>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-10">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  src={member.img}
                  alt={member.name}
                  className="w-full h-78 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-blue-600 font-semibold mt-1 text-sm uppercase tracking-wide">
                  {member.role}
                </p>

                <div className="w-10 h-[2px] bg-blue-600 mx-auto my-3"></div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TeamSection;