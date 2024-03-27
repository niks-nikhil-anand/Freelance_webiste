import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ContactUs from './Pages/ContactUs';
import LandingPageLayout from '../src/Layouts/LandingPageLayout.jsx';
import Services from './Pages/Services.jsx';
import Projects from './Pages/Projects.jsx';
import Blogs from './Pages/Blogs.jsx';
import GetStarted from './Pages/GetStarted.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<ContactUs />} />
          <Route path="services" element={<Services/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="welcome" element={<GetStarted/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
