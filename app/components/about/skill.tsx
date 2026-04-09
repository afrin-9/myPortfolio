"use client";

import { motion } from "framer-motion";

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
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-t from-[#0a110e] to-[#162c23] rounded-3xl p-4 h-full  shadow-lg hover:shadow-green-500/20 hover:border-2 border-green-600/20 hover:border-green-500/20 hover:scale-105 transition-transform"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
