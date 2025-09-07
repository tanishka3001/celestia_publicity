import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Test from './components/test';
import Background from './components/Background'
export default function App() {
  return (
    <>
      <Background />
      <Router>
        <Routes>
          {/* <Route path='/' element={} /> */}
        </Routes>
      </Router>
    </>
  );
}