import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Background from './components/Background'
import AboutUs from './components/aboutUs';
export default function App() {
  return (
    <>
      <Background />
      <AboutUs/>
    </>
  );
}