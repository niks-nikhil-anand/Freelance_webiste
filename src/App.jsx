import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Roadmap from './components/Roadmap'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}

export default App