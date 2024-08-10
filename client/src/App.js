import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Jobs from './components/Jobs';
import Dashboard from './pages/Dashboard';
import UpdateJob from './components/UpdateJob';
import WorkDetail from './components/WorkDetail';
import './index.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="fade"
      >
        <div className="pt-16"> 
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<WorkDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs/edit/:id" element={<UpdateJob />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;