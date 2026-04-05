import React from "react";

const Skills = () => {
  const skills = [
    "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Dart",
    "HTML", "CSS", "Tailwind CSS", "REST APIs", "OOP", "DSA"
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-green-700">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gradient-to-t from-[#0a110e] to-[#162c23] rounded-3xl p-4 h-full  shadow-lg hover:shadow-green-500/20 hover:border-2 hover:border-green-500/20 hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;