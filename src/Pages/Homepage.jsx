import React from 'react'

import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Collaboration from '../components/Collaboration'
import Services from '../components/Services'
import Roadmap from '../components/Roadmap'
import ButtonGradient from '../assets/svg/ButtonGradient'
import Blogs from './Blogs'
import ProjectHome from '../components/ProjectsHomeComp'


const Homepage = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      
      <Hero/>
      <Benefits/>
      <Services/>
      <ProjectHome/>
      <Blogs/>
      <ButtonGradient/>
    </div>
  )
}

export default Homepage