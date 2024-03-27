import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ContactUs from './Pages/ContactUs';
import LandingPageLayout from '../src/Layouts/LandingPageLayout.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
