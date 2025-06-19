
import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/About';
import Contact from './components/Contact';

import './App.css'

function App() {
  

  return (
    <>
      <div className="bg-[#0F172A] text-[#FFA94D] p-4 rounded-xl shadow-lg">
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        
        
        </div>
    </>
  )
}

export default App
 