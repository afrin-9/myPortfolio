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
    <main className="min-h-screen  text-white p-10">
      <h1 className="text-4xl font-bold mb-10">Design Showcase</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mr-10">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <ShowcaseCard {...item} />
        </motion.div>
      ))}
    </div>
    </main>
  );
}