import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg"; 
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto min-h-screen">
      
      {/* Left: Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold">
          Hi, I'm Alok Dalke
        </h2>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Enthusiast",
            2000,
            "Tech Explorer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-4xl font-medium text-orange-400"
        />
        <p className="text-white text-opacity-80 max-w-md text-xl">
          Passionate about building interactive, modern UIs and turning creative ideas into live web experiences.
        </p>
        <button className="text-white bg-gradient-to-r from-orange-500 to-purple-600 px-4 py-1 rounded-full text-sm hover:opacity-90"
              >
  VIEW RESUME
</button>
<div className="flex space-x-7 text-3xl text-white-500  ">
  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
    <FaGithub className="hover:text-orange-500 transition duration-300 " />
  </a>
  <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-orange-800 transition duration-300" />
  </a>
  <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-orange-800 transition duration-300" />
  </a>
</div>



      </div>
      {/* Right: Profile Image with Orange Glass Filter */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center relative">
        {/* Orange Filter Background */}
        <div className="absolute w-110 h-95 bg-orange-500 opacity-20 rounded-full blur-2xl z-0"></div>

        {/* Profile Image */}
        <div className="relative  w-90 h-90 rounded-full overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm">
          <img
            src={profile}
            alt="Alok Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
