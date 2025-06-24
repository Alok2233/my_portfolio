// AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screenpy-12 px-4 md:px-16 bg-[#0F172A] text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold text-orange-600">Alok Dalke</span>, a passionate and driven <strong>pre-final year Computer Science student</strong> at <strong>Medi-Caps University, Indore</strong>.
          <br /><br />
          I completed my <strong>10th from CBSE board</strong> and <strong>12th from MPBSE board</strong> in 2020 and 2022 respectively.
          I love building modern, interactive, and user-friendly web applications.
          <br /><br />
          I'm currently focusing on expanding my skills in <strong>React.js, Tailwind CSS, and backend integration</strong>. I enjoy building real-world projects like:
        </p>
        <ul className="list-disc list-inside mt-4 text-left text-base md:text-lg">
          <li>Real-time Weather App</li>
          <li>Blog Website with React</li>
          <li>Online Mentorship Platform (<strong>Menernship</strong>)</li>
          <li>Eco-friendly Marketplace Project</li>
        </ul>
        <p className="mt-6 text-base md:text-lg">
          I have a strong foundation in <strong>C, Core Java, JavaScript, SQL, DBMS</strong>, and currently exploring more about <strong>AI, automation, and full-stack development</strong>.
          <br /><br />
          I'm excited about learning, growing, and contributing to impactful tech products!
        </p>
      </motion.div>
    </section>
  );
}
