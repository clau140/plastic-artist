import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import Contact from './pages/Contact';
import Jobs from './components/Jobs';
import Dashboard from './pages/Dashboard';
import UpdateJob from './components/UpdateJob';
import WorkDetail from './components/WorkDetail';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-16"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route exact path="/jobs/:id" element={<WorkDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs/edit/:id" element={<UpdateJob />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;