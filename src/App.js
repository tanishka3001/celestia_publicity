import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import AboutUs from './components/aboutUs';
import Footer from './components/Footer';
export default function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<div><AboutUs /><Footer /></div>} />
        </Routes>
      </Router>
  );
}
