import React from "react";

const Frameworks = () => {
  const frameworks = [
    "Figma",
    "React Native",
    "Flutter",
    "Spring Boot",
    "React.js",
    "Next.js",
    "MERN Stack",
    "Firebase",
    "MongoDB",
  ];

  return (
    <section id="frameworks" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-green-700">Frameworks & Tools</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {frameworks.map((fw, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gradient-to-t from-[#0a110e] to-[#162c23] rounded-2xl p-6 h-full  shadow-lg hover:shadow-green-500/20 hover:border-2 hover:border-green-500/20 hover:scale-105 transition"
          >
            {fw}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frameworks;