import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RequestCallback from '../components/RequestCallback'

const LandingPageLayout = () => {
  return (
    <div>
     <Header/>
        <Outlet />
        <RequestCallback/>
     <Footer/>
    </div>
  )
}

export default LandingPageLayout
