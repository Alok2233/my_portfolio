import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaDatabase,
  FaNode,
  FaFigma,
  FaCogs,
  FaTools,
  FaServer,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { SiC, SiMongodb, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    items: [
      { name: "C", icon: <SiC /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    title: "Frontend Technology",
    icon: <FaLaptopCode />,
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend Technology",
    icon: <FaServer />,
    items: [
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    items: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
  {
    title: "Core Concepts",
    icon: <FaCogs />,
    items: [
      { name: "DSA", icon: <FaCogs /> },
      { name: "OS", icon: <FaCogs /> },
      { name: "DBMS", icon: <FaCogs /> },
      { name: "CN", icon: <FaCogs /> },
      { name: "OOP", icon: <FaCogs /> },
    ],
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const handleShow = (index) => {
    setActiveSkill(skills[index]);
  };

  const closePopup = () => setActiveSkill(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen px-4 py-20 bg-[#0F172A] text-white relative"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-orange-400">
        My Skills
      </h2>

      {/* Cards in circle */}
      <div className="relative flex justify-center items-center w-full h-[500px]">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const radius = 190;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  x,
                  y,
                  transition: {
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 80,
                  },
                },
              }}
              className="absolute w-44 h-44 bg-[#1e1b3a]/70 text-center border border-orange-400/30 shadow-xl backdrop-blur-md rounded-full p-4 flex flex-col justify-between items-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl text-orange-400 mt-4">{skill.icon}</div>
              <h3 className="text-l font-semibold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                {skill.title}
              </h3>
              <button
                onClick={() => handleShow(index)}
                className="bg-gradient-to-r from-orange-500 to-purple-600 px-4 py-1 rounded-full text-sm hover:opacity-90"
              >
                Show
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Pop-up in center */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="absolute left-1/2 top-[52%] transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1b3a]/80 border border-orange-400/30 p-8 rounded-xl shadow-2xl backdrop-blur-xl z-20 w-[90%] md:w-[400px]"
          >
            <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              {activeSkill.title}
            </h3>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {activeSkill.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="text-3xl text-orange-300">{item.icon}</div>
                  <p className="text-sm mt-1">{item.name}</p>
                </div>
              ))}
            </div>
            <button
              onClick={closePopup}
              className="mt-6 block mx-auto px-5 py-1 bg-orange-600 hover:bg-orange-700 rounded-full"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
