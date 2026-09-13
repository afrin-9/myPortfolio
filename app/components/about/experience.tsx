"use client";

import { motion } from "framer-motion";
import { achievements, experience } from "@/app/data/portfolioData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function RoleIcon({ role }: { role: string }) {
  const common = "w-5 h-5 md:w-6 md:h-6";

  if (/quality|qa/i.test(role)) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (/design/i.test(role)) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2l7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth={1.8}>
      <path d="M8 9l-4 4 4 4M16 9l4 4-4 4M13 5l-3 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
      <path d="M8 4h8v4a4 4 0 01-8 0V4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 5H5a3 3 0 003 3M16 5h3a3 3 0 01-3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12v3M9 19h6M10 19v-2.5a2 2 0 014 0V19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-2 text-green-700">Professional Experience</h2>
      <p className="text-gray-500 mb-12 max-w-2xl">
        A timeline of roles where I&apos;ve shipped mobile features, hardened releases through QA, and shaped product UI.
      </p>

      <div className="relative">
        {/* Timeline spine */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-green-500/70 via-green-500/30 to-transparent"
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {experience.map((job, index) => {
            const alignRight = index % 2 === 1;
            return (
              <div
                key={job.role + job.company}
                className={`relative flex items-start md:items-center gap-5 md:gap-0 ${
                  alignRight ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: EASE }}
                  className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500/30 to-black border border-green-400/50 flex items-center justify-center text-green-400 shadow-lg shadow-green-500/10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                >
                  <RoleIcon role={job.role} />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: alignRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: EASE }}
                  className={`w-full md:w-[46%] bg-gradient-to-r from-black to-[#162c23] rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-green-500/20 border border-green-600/20 hover:border-green-500/40 transition ${
                    alignRight ? "md:mr-auto md:text-left" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="inline-block w-fit text-xs uppercase tracking-wider text-green-400/80 bg-green-500/10 px-2 py-0.5 rounded-full mb-1">
                      {job.duration}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="text-green-400 text-sm font-medium">
                      {job.company} · {job.location}
                    </p>
                  </div>

                  <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm md:text-base">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-green-500/20 text-white px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <h3 className="text-2xl font-bold mt-20 mb-8 text-green-700">Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.event}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#0a110e] to-[#162c23] border border-green-500/20 rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 hover:border-green-500/40 transition-shadow"
          >
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20"
              style={{ background: "radial-gradient(circle, #22c55e, transparent 70%)" }}
            />
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-4">
              <TrophyIcon />
            </div>
            <p className="text-lg font-bold text-white leading-snug">{item.rank}</p>
            <p className="text-gray-300 text-sm mt-1">{item.event}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-500 text-xs">{item.context}</span>
              <span className="text-xs font-semibold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                {item.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
