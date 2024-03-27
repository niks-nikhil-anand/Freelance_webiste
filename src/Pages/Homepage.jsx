import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Collaboration from '../components/Collaboration'
import Services from '../components/Services'
import Roadmap from '../components/Roadmap'
import ButtonGradient from '../assets/svg/ButtonGradient'
import Footer from '../components/Footer.jsx'

const Homepage = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Roadmap/>
      <Footer/>
      <ButtonGradient/>
    </div>
  )
}

export default Homepage