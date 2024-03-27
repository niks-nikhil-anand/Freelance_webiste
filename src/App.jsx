import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App