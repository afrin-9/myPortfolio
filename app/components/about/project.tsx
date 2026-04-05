import { projects } from "@/app/data/portfolioData";
import { g, section } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-green-700">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-black to-[#162c23] rounded-3xl p-8 h-full  shadow-lg hover:shadow-green-500/20 hover:border-2 hover:border-green-500/20 hover:scale-105 transition"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;