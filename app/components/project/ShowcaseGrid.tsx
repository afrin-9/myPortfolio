// components/ShowcaseGrid.tsx
"use client";
import { projects } from "@/app/data/portfolioData";
import { motion } from "framer-motion";
import ShowcaseCard from "../ShowcaseCard";

const items = projects.map((project) => ({
  title: project.title,
  tags: project.technologies,
  image: project.image ?? "",
  github: project.github,
}));


export default function ShowcaseGrid() {
  return (
    <main className="min-h-screen  text-white p-10 pt-50">
            <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5 flex items-center justify-center flex-col gap-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Turning Ideas Into Reality</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex items-center justify-center flex-col gap-4 text-center"
      >
        <p className="text-gray-400 text-lg">
          Crafting intuitive, user-centered digital experiences through design and code.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex-col gap-4"
      >
        <h1 className="text-2xl md:text-3xl ">
          Project Showcase
        </h1>
      </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mr-10 height-100 width-100">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -20, rotate: -6 }}/// -30
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}///
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} ///0.3
        >
          <ShowcaseCard {...item} />
        </motion.div>
      ))}
    </div>
    </main>
  );
}