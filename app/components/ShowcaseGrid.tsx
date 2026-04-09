// components/ShowcaseGrid.tsx
"use client";
import { motion } from "framer-motion";
import ShowcaseCard from "./ShowcaseCard";
import { projects } from "../data/portfolioData";

const items = projects.slice(0, 4).map((project) => ({
  title: project.title,
  tags: project.technologies,
  image: project.image ?? "",
  github: project.github,
}));

export default function ShowcaseGrid() {
  return (
    <main className="min-h-screen text-white px-4 md:px-10 py-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">Design Showcase</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, rotate: -6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ShowcaseCard {...item} />
        </motion.div>
      ))}
    </div>
    </main>
  );
}