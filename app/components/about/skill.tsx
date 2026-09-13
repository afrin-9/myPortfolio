"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    label: "Concepts & Practices",
    items: ["OOP", "Data Structures & Algorithms", "REST APIs", "Tailwind CSS"],
  },
];

type GroupLabel = (typeof groups)[number]["label"];

const ACCENTS: Record<GroupLabel, { text: string; border: string; wash: string; glow: string; pillHover: string }> = {
  Languages: {
    text: "text-green-400",
    border: "border-green-500/25 hover:border-green-400/50",
    wash: "from-green-500/10",
    glow: "#22c55e",
    pillHover: "hover:border-green-500/50",
  },
  "Concepts & Practices": {
    text: "text-cyan-400",
    border: "border-cyan-500/25 hover:border-cyan-400/50",
    wash: "from-cyan-500/10",
    glow: "#22d3ee",
    pillHover: "hover:border-cyan-500/50",
  },
};

function GroupIcon({ label }: { label: GroupLabel }) {
  const common = "w-5 h-5";
  if (label === "Languages") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
        <path d="M8 9l-4 4 4 4M16 9l4 4-4 4M13 5l-3 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
      <path
        d="M12 3a5 5 0 00-3 9c.5.4.8 1 .8 1.7V15h4.4v-1.3c0-.7.3-1.3.8-1.7a5 5 0 00-3-9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.8 18h4.4M10.5 20.5h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const TILTS = [-3, 2, -2, 3, -1, 1.5, -2.5, 2.5];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-2 text-green-700">Skills</h2>
      <p className="text-gray-500 mb-10 max-w-2xl">
        The languages I write daily, and the practices behind how I build with them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group, gi) => {
          const accent = ACCENTS[group.label];
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: EASE }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden bg-[#0a110e] border rounded-3xl p-6 shadow-lg transition-colors ${accent.border}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.wash} to-transparent`} />
              <div
                className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-25"
                style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }}
              />

              <div className="relative flex items-center gap-2.5 mb-5">
                <span className={`flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 ${accent.text}`}>
                  <GroupIcon label={group.label} />
                </span>
                <h3 className={`text-base md:text-lg font-semibold ${accent.text}`}>{group.label}</h3>
              </div>

              <div className="relative flex flex-wrap gap-2.5">
                {group.items.map((item, index) => {
                  const tilt = TILTS[index % TILTS.length];
                  return (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85, rotate: tilt }}
                      whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
                      viewport={{ once: true, amount: 0.4 }}
                      whileHover={{ rotate: 0, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 16, delay: gi * 0.1 + index * 0.04 }}
                      style={{ willChange: "transform, opacity" }}
                      className={`px-3 py-1.5 rounded-full text-xs md:text-sm bg-white/[0.04] border border-white/10 text-gray-300 shadow-sm transition-colors cursor-default ${accent.pillHover}`}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
