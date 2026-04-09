// components/AboutContent.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center mt-10 mx-4 md:mx-10">
      {/* image — slides in from left */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full flex items-center justify-center">
          <Image
            src="/ME.jpeg"
            alt="about"
            width={300}
            height={300}
            className="object-cover w-84 h-84 rounded-lg border-2 border-green-500/20 shadow-lg shadow-green-500/20 hover:scale-105 transition"
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
            title: "Experience",
            body: (
              <p className="text-lg leading-relaxed mt-4 max-w-4xl">
                My experience includes working on projects like an AR-based property discovery app, a job portal
                system, and an interactive learning platform for children with autism. I focus on delivering
                high-quality, accessible, and engaging user experiences.
              </p>
            ),
          },
          {
            title: "Education",
            body: (
              <div className="flex items-start gap-4 mt-2">
                
                <div>
                  <p className="text-white font-semibold text-base">
                    B.Sc. in Computer Science &amp; Engineering
                  </p>
                  <p className="text-green-700 text-sm font-medium mt-0.5">
                    Islamic University of Technology (IUT)
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    OIC, Board Bazar, Gazipur, Bangladesh
                  </p>
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
  );
}
