import React from "react";
import { COLORS } from "../lib/colors";
import Link from "next/link";

const Resume = () => {
  const resumeUrl = "/resume.pdf"; // Place your PDF in the public folder

  return (
    <section id="resume" className="py-16 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-bold mb-8 text-green-700">My Resume</h2>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mr-150 mb-10">

      
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
      <div className="w-full h-[600px] border border-gray-700 rounded-xl overflow-hidden">
        <embed
          src={resumeUrl}
          type="application/pdf"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Resume;
