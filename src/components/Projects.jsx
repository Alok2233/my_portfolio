import React, { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Netflix Clone",
    description:
      "A full-featured clone of Netflix built with HTML , CSS, JS. Includes login mock, dynamic routes, and sleek UI.",
    btn: "View Live",
    link: "#", // replace with live link
  },
  {
    name: "Weather App",
    description:
      "Search any city to get real-time weather updates using the OpenWeatherMap API.",
    btn: "Check Weather",
    link: "#",
  },
  
  {
    name: "Password Generator",
    description:
      "Generate strong and customizable passwords with length and symbol controls.",
    btn: "Generate Now",
    link: "#",
  },
  {
    name: "My Portfolio",
    description:
      "A creative developer portfolio showcasing my skills, projects, and contact info.",
    btn: "Explore",
    link: "#",
  },
];

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-16 bg-[#0F172A] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <RevealCard key={index} project={project} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
}

function RevealCard({ project, delay }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-[#1e1b3a]/70 rounded-xl p-6 border border-orange-400/30 shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
    >
      {/* Cursor-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-40 h-40 bg-orange-500 opacity-20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
      ></div>

      <motion.h3
        className="text-2xl font-semibold mb-4"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {project.name}
      </motion.h3>
      <p className="text-gray-300 mb-6">{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition"
      >
        {project.btn}
      </a>
    </motion.div>
  );
}
