import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Gallerypage from './Pages/Gallerypage';
import Contactpage from './Pages/Contactpage';
import JoinUs from './Pages/JoinUs';
import ScrollToTop from './Components/ScrollToTop';
import Aboutpage from './Pages/Aboutpage';
import MembersPage from './Pages/MembersPage';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </Router>
  )
}

export default App