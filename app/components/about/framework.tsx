"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Frameworks & Libraries",
    items: ["Flutter", "React Native", "React.js", "Next.js", "MERN Stack", "Spring Boot", "JavaFX"],
  },
  {
    label: "Backend & Database",
    items: ["Firebase", "MongoDB", "PostgreSQL", "Vector Stores"],
  },
  {
    label: "AI / LLM",
    items: [
      "RAG Pipelines",
      "Embeddings",
      "Vector Databases (FAISS)",
      "n8n Agent Workflows",
      "Prompt Engineering",
      "LLM APIs (OpenAI / Groq)",
    ],
  },
  {
    label: "Design",
    items: ["Figma", "Design Systems", "User Flows", "Interactive Prototyping", "Usability Testing"],
  },
  {
    label: "QA & Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "UI/UX Testing",
      "Bug Tracking",
      "Cross-device/Cross-browser Testing",
    ],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "Postman", "VS Code", "Android Studio", "Scene Builder", "n8n"],
  },
];

type GroupLabel = (typeof groups)[number]["label"];

// Literal Tailwind classes per category so the JIT scanner can find every
// combination — do not build these strings dynamically.
const ACCENTS: Record<
  GroupLabel,
  { text: string; border: string; wash: string; glow: string; pillHover: string }
> = {
  "Frameworks & Libraries": {
    text: "text-green-400",
    border: "border-green-500/25 hover:border-green-400/50",
    wash: "from-green-500/10",
    glow: "#22c55e",
    pillHover: "hover:border-green-500/50",
  },
  "Backend & Database": {
    text: "text-teal-400",
    border: "border-teal-500/25 hover:border-teal-400/50",
    wash: "from-teal-500/10",
    glow: "#2dd4bf",
    pillHover: "hover:border-teal-500/50",
  },
  "AI / LLM": {
    text: "text-violet-400",
    border: "border-violet-500/25 hover:border-violet-400/50",
    wash: "from-violet-500/10",
    glow: "#a78bfa",
    pillHover: "hover:border-violet-500/50",
  },
  Design: {
    text: "text-pink-400",
    border: "border-pink-500/25 hover:border-pink-400/50",
    wash: "from-pink-500/10",
    glow: "#f472b6",
    pillHover: "hover:border-pink-500/50",
  },
  "QA & Testing": {
    text: "text-amber-400",
    border: "border-amber-500/25 hover:border-amber-400/50",
    wash: "from-amber-500/10",
    glow: "#fbbf24",
    pillHover: "hover:border-amber-500/50",
  },
  Tools: {
    text: "text-sky-400",
    border: "border-sky-500/25 hover:border-sky-400/50",
    wash: "from-sky-500/10",
    glow: "#38bdf8",
    pillHover: "hover:border-sky-500/50",
  },
};

function CategoryIcon({ label, className }: { label: GroupLabel; className?: string }) {
  const common = className ?? "w-5 h-5";
  switch (label) {
    case "Frameworks & Libraries":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 13l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Backend & Database":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
          <ellipse cx="12" cy="5.5" rx="8" ry="2.5" strokeLinecap="round" />
          <path d="M4 5.5V12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5.5" strokeLinecap="round" />
          <path d="M4 12v6.5c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V12" strokeLinecap="round" />
        </svg>
      );
    case "AI / LLM":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
          <path
            d="M12 3l1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18.5 13l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" strokeLinejoin="round" />
        </svg>
      );
    case "Design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="1.4" />
        </svg>
      );
    case "QA & Testing":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Tools":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
          <path
            d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Deterministic per-item tilt so the tag cloud reads as playfully
// scattered without differing between server and client render.
const TILTS = [-3, 2, -2, 3, -1, 1.5, -2.5, 2.5];

const Frameworks = () => {
  return (
    <section id="frameworks" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-2 text-green-700">Frameworks &amp; Tools</h2>
      <p className="text-gray-500 mb-10 max-w-2xl">
        Everything I reach for day to day, grouped by what it&apos;s for.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {groups.map((group, gi) => {
          const accent = ACCENTS[group.label];
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: EASE }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden bg-[#0a110e] border rounded-3xl p-6 shadow-lg transition-colors ${accent.border}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.wash} to-transparent`}
              />
              <div
                className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-25"
                style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }}
              />

              <div className="relative flex items-center gap-2.5 mb-5">
                <span className={`flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 ${accent.text}`}>
                  <CategoryIcon label={group.label} />
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
                      transition={{ type: "spring", stiffness: 280, damping: 16, delay: gi * 0.08 + index * 0.04 }}
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

export default Frameworks;
