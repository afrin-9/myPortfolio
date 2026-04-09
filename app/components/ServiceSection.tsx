// components/ServicesSection.tsx
"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Complete website",
    description:
      "Scalable custom website design in Figma and development in Next.js",
    tools: ["Figma"],
    features: [
      "Figma ",
      "Multi-page",
      "SEO Optimization",
      "CMS setup",
      "Responsive",
      "Design + Development",
    ],
  },
  {
    title: "UI UX Design",
    description: "Looking to design a web or app product?",
    tools: ["Figma"],
    features: [
      "User research",
      "Wireframing & Prototyping",
      "Design system",
      "Visual UI design",
      "Design only",
    ],
  },
  {
    title: "Mobile App Design",
    description: "Clean mobile UI that delivers value on every device",
    tools: ["Figma"],
    features: ["Multi-page", "Design system", "App prototype"],
  },
   {
    title: "Web Development",
    description: "Custom web applications built with the MERN stack",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    features: ["API integration", "Database architecture", "Authentication", "Deployment-ready"],
  },

];

export default function ServicesSection() {
  return (
    <section className="mt-12 md:mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 mx-4 md:mx-10">How can I help</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-4 md:mx-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
