import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 border-b border-white/20 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-orange-400">Alok Dalke</h1>
        <ul className="flex gap-6 text-white font-medium">

          <li className="hover:text-orange-400 cursor-pointer"><a href="#">Home</a></li>
                    <li className="hover:text-orange-400 cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-orange-400 cursor-pointer"><a href="#projects">Projects</a></li>
         <li className="hover:text-orange-400 cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-orange-400 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
