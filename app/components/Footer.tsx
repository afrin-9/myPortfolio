import { personalInfo } from "../data/portfolioData";
import { COLORS } from "../lib/colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-24 py-8 text-center text-gray-300"
     
    >
      <p className="text-sm md:text-base">
        © {currentYear} {personalInfo.name}. All rights reserved.
      </p>

      <p className="mt-2">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-white underline hover:text-green-200 transition"
        >
          {personalInfo.email}
        </a>
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          className="text-white hover:text-green-200 transition"
        >
          LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          className="text-white hover:text-green-200 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}