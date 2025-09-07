import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Background from './components/Background'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Footer />
      <Router>
        <Routes>
          {/*<Route path='/' element={<Footer></Footer>} />*/}
        </Routes>
      </Router>
    </>
  );
}