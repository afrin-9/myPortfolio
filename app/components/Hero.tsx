"use client";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { useEffect, useState } from "react";
import { COLORS } from "../lib/colors";
import { personalInfo } from "../data/portfolioData";
import Link from "next/link";

const EASE: Easing = [0.22, 1, 0.36, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

const ROLES = [
  "UI/UX Designer",
  "Mobile App Developer",
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex % ROLES.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-green-400 font-bold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-50 relative z-10 px-4 md:px-0 overflow-hidden">

      {/* Glowing orb background accent */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: `radial-gradient(circle, ${COLORS.greenGlow}, transparent 70%)` }}
      />

     

      {/* Name */}
      <motion.h1
        {...fadeUp(0.15)}
        className="text-5xl md:text-7xl font-extrabold max-w-4xl leading-tight"
      >
        <span className="text-white">Hi, I&apos;m </span>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, #4ade80, #16a34a, #064e3b)`,
          }}
        >
          {personalInfo.name}
        </span>
      </motion.h1>

      {/* Animated typing role */}
      <motion.p
        {...fadeUp(0.3)}
        className="mt-5 text-xl md:text-2xl font-semibold text-white/70 h-8"
      >
        Computer Science Student &amp; <TypingRole />
      </motion.p>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        className="mt-6 w-24 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
      />

      {/* Summary */}
      <motion.p
        {...fadeUp(0.55)}
        className="mt-6 max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed"
      >
        Enthusiastic developer skilled in React Native, Flutter, Spring Boot, and the MERN Stack.
        I build interactive mobile apps, full-stack web solutions, and UI/UX designs that solve real problems.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.7)}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.06, boxShadow: `0 0 40px ${COLORS.greenGlow}` }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full"
          style={{
            background: `linear-gradient(135deg,  ${COLORS.greenMid}, ${COLORS.greenDark})`,
            boxShadow: `0 0 18px ${COLORS.greenGlow}`,
          }}
          
        >
          <Link
            href={`mailto:${personalInfo.email}`}
            className="block px-10 py-3 rounded-full text-white font-bold tracking-wide"
          >
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full bg-gradient-to-r from-[#111a15] to-[#223d32] backdrop-blur-sm"
        >
          <Link
            href="/resume"
            className="block px-10 py-3 rounded-full text-white font-bold tracking-wide"
          >
            View Resume
          </Link>
        </motion.div>
      </motion.div>

      {/* Social links */}
      <motion.div
        {...fadeUp(0.85)}
        className="flex gap-4 mt-8"
      >
        {[
          { label: "LinkedIn", href: personalInfo.linkedin },
          { label: "GitHub", href: personalInfo.github },
        ].map(({ label, href }) => (
          <motion.div key={label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={href}
              target="_blank"
              className="px-5 py-2 rounded-lg border border-green-400/20 text-green-500/60 hover:border-green-400/50 hover:text-green-400 hover:bg-green-400/10 transition duration-300 text-sm font-medium"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-16 flex flex-col items-center gap-1 text-green-500/30 text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-green-500/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
