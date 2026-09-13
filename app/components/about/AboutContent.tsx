// components/AboutContent.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { education } from "@/app/data/portfolioData";

export default function AboutContent() {
  return (
    <section id="about" className="py-16 px-6 pt-30 md:px-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-5 flex flex-col gap-4"
      >
          <h1 className="text-2xl md:text-4xl font-bold mb-2">About Me</h1>
      </motion.div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center mt-10 mx-4 md:mx-10">
      {/* image — slides in from left */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src="/ME.jpeg"
            alt="about"
            width={300}
            height={300}
            className="object-cover w-84 h-84 rounded-lg border-2 border-green-500/20 shadow-lg shadow-green-500/20 hover:scale-105 transition-transform"
          />
        </div>
      </motion.div>

      {/* content boxes — slide in from right, staggered */}
      <div className="w-full md:w-3/5 flex flex-col gap-6 ">
        {[
          {
            title: "Skilled Professional",
            body: (
              <p className="text-lg leading-relaxed max-w-4xl">
                Enthusiastic Computer Science student and versatile developer with hands-on experience in{" "}
                <span className="text-green-400 font-medium">UI/UX Design</span>,{" "}
                <span className="text-green-400 font-medium">Software Quality Assurance</span>,{" "}
                <span className="text-green-400 font-medium">Mobile App Development</span>, and{" "}
                <span className="text-green-400 font-medium">Full-Stack Web Development</span>.
              </p>
            ),
          },
          {
            title: "Projects",
            body: (
              <p className="text-lg leading-relaxed mt-4 max-w-4xl">
                I specialize in building scalable and user-centric applications using modern technologies like
                React Native, Flutter, Spring Boot, and the MERN stack. I enjoy transforming ideas into
                intuitive and impactful digital experiences.
              </p>
            ),
          },
          {
            title: "Education",
            body: (
              <div className="flex items-start gap-4 mt-2">
                <div>
                  <p className="text-white font-semibold text-base">
                    {education.degree} · CGPA: {education.cgpa}
                  </p>
                  <p className="text-green-700 text-sm font-medium mt-0.5">
                    {education.institution}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {education.location} &middot; {education.duration}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs bg-green-500/10 text-gray-300 px-2 py-1 rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ),
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#0b0f0e] border border-green-500/20 rounded-2xl p-6 border-t-3 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 * (i + 1) }}
          >
            <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
            {card.body}
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
