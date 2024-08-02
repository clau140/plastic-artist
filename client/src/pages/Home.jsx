import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/home1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight, faImages, faUser } from '@fortawesome/free-solid-svg-icons'; 

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center p-6 bg-gray-900 bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight text-shadow-default">
          Bienvenido a mi Portafolio
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 text-shadow-default">
          Explora mis últimos trabajos, descubre mi estilo y conoce más sobre mi trayectoria como dibujante. ¡Gracias por visitar!
        </p>
        <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/gallery"
            className="bg-dark-blue text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:text-light-blue hover:bg-dark-gray hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <FontAwesomeIcon icon={faImages} className="mr-2" /> 
            Ver Galería
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
          <Link
            to="/profile"
            className="bg-dark-blue text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:text-light-blue hover:bg-dark-gray hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" /> 
            Ver Perfil
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
