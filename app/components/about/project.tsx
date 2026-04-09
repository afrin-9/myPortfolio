"use client";

import { projects } from "@/app/data/portfolioData";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-green-700">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-r from-black to-[#162c23] rounded-3xl p-8 h-full  shadow-lg hover:shadow-green-500/20 hover:border-2 border-green-600/20 hover:border-green-500/20 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-green-500/20 text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <Link href={project.github} target="_blank">
                <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-600/20 hover:border-2 hover:border-green-500/20  transition">
                  ↗
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
