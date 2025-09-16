import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import AboutUs from './components/aboutUs';
import FAQ from './components/faq';
import Footer from './components/Footer';
import Tracks from './components/tracks';
import Prizes from './components/prizes';
import HomePage from './components/Homepage';
export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  return (
      <Router>
        <Routes>
          <Route path='/' element={<div className='overflow-x-hidden'><HomePage /> <Tracks selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} /><Prizes selectedIdx={selectedIdx} /><FAQ /><AboutUs /><Footer /></div>} />
        </Routes>
      </Router>
  );
}
