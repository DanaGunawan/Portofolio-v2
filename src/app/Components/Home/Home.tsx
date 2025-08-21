import React from 'react'
import ResponsiveNav from './navbar/ResponsiveNav'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Resume from '../Resume/Resume';
import ParticleHero from '../Hero/ParticleBackground'
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="overflow-hidden h-auto">
      <ParticleHero />
      <ResponsiveNav />
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
