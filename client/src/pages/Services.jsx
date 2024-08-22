import React from 'react';
import { Link } from 'react-router-dom';
import pinturaImage from '../assets/pintura.png'; 

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8 text-white">
      <div className="mb-8 mt-12">
        <Link to="/" className="text-sky-blue hover:underline">
          Volver a Inicio
        </Link>
      </div>
      <div className="relative container mx-auto p-6 rounded-lg shadow-2xl">
       
        <div className="absolute inset-0 rounded-lg bg-black opacity-60"></div>

        <div className="relative bg-transparent p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Servicios Ofrecidos</h1>
          <ul className="list-inside grid grid-cols-1 md:grid-cols-2 gap-6 mb-9 mt-9"> 
            <li className="flex items-start">
              <span className="w-4 h-4 mr-4 text-blue-500">•</span>
              <div>
                <h2 className="text-xl font-semibold">Cuadros Personalizados</h2>
                <p className="text-gray-700">Creación de cuadros únicos según las preferencias del cliente.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mr-4 text-blue-500">•</span>
              <div>
                <h2 className="text-xl font-semibold">Retratos</h2>
                <p className="text-gray-700">Retratos detallados y personalizados para capturar momentos especiales.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mr-4 text-blue-500">•</span>
              <div>
                <h2 className="text-xl font-semibold">Carteles Personalizados</h2>
                <p className="text-gray-700">Diseño de carteles a medida para eventos, negocios y más.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mr-4 text-blue-500">•</span>
              <div>
                <h2 className="text-xl font-semibold">Murales</h2>
                <p className="text-gray-700">Murales artísticos para decorar espacios públicos y privados.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mr-4 text-blue-500">•</span>
              <div>
                <h2 className="text-xl font-semibold">Clases particulares</h2>
                <p className="text-gray-700">Clases particulares para alumnos de secundaria.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 mr-4 text-blue-500">•</span>
              <div>
                <h2 className="text-xl font-semibold">Otros</h2>
                <p className="text-gray-700">Otros servicios artísticos personalizados según las necesidades del cliente.</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-md text-black">
            <h2 className="text-2xl font-bold mb-4">¿Interesado en alguno de mis servicios?</h2>
            <p className="text-gray-700 mb-4">
              Si tienes alguna pregunta o deseas más información sobre mis servicios, no dudes en contactarme. 
              Estoy aquí para ayudarte a hacer realidad tus ideas.
            </p>
            <Link
              to="/contact"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Contáctame
            </Link>
          </div>
         
        </div>
        <img
            src={pinturaImage}
            alt="mancha de pintura"
            className="absolute top-1 right-3 w-32 h-auto"
          />
      </div>
    </div>
  );
};

export default Services;
