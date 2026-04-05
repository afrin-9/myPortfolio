"use client";
import Link from "next/link";
import { useState } from "react";
import { COLORS } from "../lib/colors";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "Profile", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 flex justify-end items-center px-6 md:px-12 py-4 md:py-6">

      {/* Desktop pill nav */}
      <div
        className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
        style={{ boxShadow: `0 0 18px ${COLORS.greenGlow}` }}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="text-sm px-4 py-1 text-gray-400 hover:text-green-500 transition"
          >
            {item.label}
          </Link>
        ))}
        <div
          className="rounded-full flex items-center justify-center text-white font-extrabold shadow-lg hover:scale-105 transition"
          style={{
            background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
            boxShadow: `0 0 18px ${COLORS.greenGlow}`,
          }}
        >
          <Link
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-2 rounded-full text-sm"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute top-full right-4 mt-2 w-52 bg-black/90 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden backdrop-blur-md"
          style={{ boxShadow: `0 0 24px ${COLORS.greenGlow}` }}
        >
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm px-4 py-2 text-gray-400 hover:text-green-500 hover:bg-white/5 rounded-xl transition"
            >
              {item.label}
            </Link>
          ))}
          <div
            className="rounded-full mt-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
            }}
          >
            <Link
              href={`mailto:${personalInfo.email}`}
              onClick={() => setOpen(false)}
              className="block text-center text-sm px-4 py-2 text-white font-semibold"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
