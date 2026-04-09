"use client";

import { COLORS } from "../lib/colors";
import Link from "next/link";
import { motion } from "framer-motion";

const Resume = () => {
  const resumeUrl = "/resume.pdf";

  return (
    <section id="resume" className="py-16 px-6 pt-50 md:px-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5 flex items-center justify-center flex-col gap-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Resume</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex items-center justify-center flex-col gap-4 text-center"
      >
        <p className="text-gray-400 text-lg">
          Explore my journey, technical expertise, and the work I&apos;ve done so far.
        </p>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div
          className="rounded-full flex items-center justify-center text-white font-extrabold shadow-lg hover:scale-105 transition"
          style={{
            background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
            boxShadow: `0 0 18px ${COLORS.greenGlow}`,
          }}
        >
          <Link href={resumeUrl} target="_blank">
            <button className="ml-2 px-5 py-2 rounded-full text-white shadow-lg hover:scale-105 transition">
              View Resume
            </button>
          </Link>
        </div>

        <div
          className="rounded-full flex items-center justify-center text-white font-extrabold shadow-lg hover:scale-105 transition"
          style={{
            background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
            boxShadow: `0 0 18px ${COLORS.greenGlow}`,
          }}
        >
          <Link href={resumeUrl} download>
            <button className="ml-2 px-5 py-2 rounded-full text-white shadow-lg hover:scale-105 transition">
              Download Resume
            </button>
          </Link>
        </div>
      </div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, x:-50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full h-100 md:h-150 border border-gray-700 rounded-xl overflow-hidden">
          <embed src={resumeUrl} type="application/pdf" className="w-full h-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
