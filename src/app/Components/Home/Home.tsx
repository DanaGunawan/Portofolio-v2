import React from 'react'
import ResponsiveNav from './navbar/ResponsiveNav'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Resume from '../Resume/Resume';
import ParticleHero from '../Hero/ParticleBackground'

const Home = () => {
  return (
    <div className="overflow-hidden h-[3000px]">
      <ParticleHero />
      <ResponsiveNav />
      <Hero />
      <Services />
      <Resume />
    </div>
  )
}

export default Home
