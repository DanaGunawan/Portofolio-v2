import React from 'react'
import ResponsiveNav from './navbar/ResponsiveNav'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div className="overflow-hidden h-[2000px]">
      <ResponsiveNav />
      <Hero />
      <Services />
    </div>
  )
}

export default Home
