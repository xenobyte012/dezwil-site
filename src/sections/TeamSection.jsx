import React from "react";

function TeamSection() {
  const team = [
    {
      name: "Wilson T. Selemogo",
      role: "Managing Director",
      desc: "Leads daily operations and company direction.",
      img: "https://www.creativefabrica.com/wp-content/uploads/2022/06/02/Client-employee-business-man-icon-Graphics-31597820-1.jpg",
    },
    {
      name: "Harry Seleke",
      role: "Technical Support",
      desc: "Brings over 20 years of experience in maintenance and projects.",
      img: "https://www.creativefabrica.com/wp-content/uploads/2022/06/02/Client-employee-business-man-icon-Graphics-31597820-1.jpg",
    },
    {
      name: "Thabo Lengamanyane",
      role: "Administration Officer",
      desc: "Handles administrative functions and support.",
      img: "https://www.creativefabrica.com/wp-content/uploads/2022/06/02/Client-employee-business-man-icon-Graphics-31597820-1.jpg",
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
        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* Image */}
              <img
                loading="lazy" 
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-blue-600 font-semibold mt-1">
                  {member.role}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
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