import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import AboutUs from './components/aboutUs';
import FAQ from './components/faq';
export default function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<><FAQ /><AboutUs /></>} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </Router>
  );
}
