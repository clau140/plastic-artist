import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-16"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;