import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Test from './components/test';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Test />} />
      </Routes>
    </Router>
  );
}
