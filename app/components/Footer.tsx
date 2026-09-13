import Link from "next/link";
import { personalInfo } from "../data/portfolioData";
import { COLORS } from "../lib/colors";

const quickLinks = [
  { label: "Profile", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Resume", href: "/resume" },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.7a2 2 0 012-2.2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative mt-24 pt-20 pb-8 px-6 md:px-20 text-gray-300 border-t border-white/10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(circle, ${COLORS.greenMid}, transparent 70%)` }}
      />

      {/* Get in touch CTA */}
      <div className="relative text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block text-xs uppercase tracking-widest text-green-400/90 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full mb-5">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s build something great together
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Have a project in mind, an opportunity to discuss, or just want to say hello? I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-7 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
            style={{
              background: `linear-gradient(135deg, ${COLORS.greenMid}, ${COLORS.greenDark})`,
              boxShadow: `0 0 18px ${COLORS.greenGlow}`,
            }}
          >
            Email Me
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="px-7 py-3 rounded-full text-white font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            Call
          </a>
        </div>
      </div>

      {/* Columns */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto border-t border-white/10 pt-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
          <p className="text-sm text-gray-500 max-w-xs">
            Software Engineer crafting mobile, web, and AI-powered products end to end.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-green-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5 text-gray-400">
              <MailIcon />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-green-400 transition break-all">
                {personalInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-gray-400">
              <PhoneIcon />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-green-400 transition">
                {personalInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-gray-400">
              <PinIcon />
              {personalInfo.location}
            </li>
          </ul>

          <div className="flex gap-3 mt-5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/40 transition"
            >
              <LinkedInIcon />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/40 transition"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-2 max-w-5xl mx-auto mt-12 pt-6 border-t border-white/5 text-xs text-gray-500">
        <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
