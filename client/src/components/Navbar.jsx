import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { Bars3Icon, XMarkIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Modal from '../components/Modal'; 
import logo from '../assets/logoSR.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const navigate = useNavigate(); 
  const location = useLocation(); // Obtener la ruta actual

  const handleAdminLogin = () => {
    setIsModalOpen(true); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false); 
    navigate('/login'); 
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); 
    } else {
      setScrolled(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`shadow-lg p-4 fixed w-full top-0 left-0 z-20 transition-all duration-300 ${scrolled ? 'bg-dark-blue bg-opacity-90' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> 
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/jobs" 
              className={`px-3 py-2 rounded-md ${location.pathname === '/jobs' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
              Galería
            </Link>
            <Link 
              to="/profile" 
              className={`px-3 py-2 rounded-md ${location.pathname === '/profile' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
              Perfil
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 rounded-md ${location.pathname === '/services' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
              Servicios
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
              Contacto
            </Link>
            <button
              onClick={handleAdminLogin}
              className="text-white hover:text-sky-blue flex items-center px-3 py-2 rounded-md"
            >
              <LockClosedIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-dark-blue bg-opacity-90 absolute top-16 left-0 w-full shadow-lg p-4 z-30">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/jobs" 
                className={`px-3 py-2 rounded-md ${location.pathname === '/jobs' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
                Galería
              </Link>
              <Link 
                to="/profile" 
                className={`px-3 py-2 rounded-md ${location.pathname === '/profile' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
                Perfil
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 rounded-md ${location.pathname === '/services' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
                Servicios
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'text-sky-blue' : 'text-white hover:text-sky-blue'}`}>
                Contacto
              </Link>
              <button
                onClick={handleAdminLogin}
                className="text-white hover:text-sky-blue flex items-center px-3 py-2 rounded-md"
              >
                <LockClosedIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </nav>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleModalConfirm} />
    </>
  );
};

export default Navbar;
