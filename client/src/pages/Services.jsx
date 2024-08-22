import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8">
      <div className="mb-8 mt-12">
        <Link to="/" className="text-sky-blue hover:underline">
          Volver a Inicio
        </Link>
      </div>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Servicios Ofrecidos</h1>
        <ul className="list-inside">
          <li className="mb-4 flex items-start">
            <span className="w-4 h-4 mr-4 text-blue-500">•</span>
            <div>
              <h2 className="text-xl font-semibold">Cuadros Personalizados</h2>
              <p className="text-gray-700">Creación de cuadros únicos según las preferencias del cliente.</p>
            </div>
          </li>
          <li className="mb-4 flex items-start">
            <span className="w-4 h-4 mr-4 text-blue-500">•</span>
            <div>
              <h2 className="text-xl font-semibold">Retratos</h2>
              <p className="text-gray-700">Retratos detallados y personalizados para capturar momentos especiales.</p>
            </div>
          </li>
          <li className="mb-4 flex items-start">
            <span className="w-4 h-4 mr-4 text-blue-500">•</span>
            <div>
              <h2 className="text-xl font-semibold">Carteles Personalizados</h2>
              <p className="text-gray-700">Diseño de carteles a medida para eventos, negocios y más.</p>
            </div>
          </li>
          <li className="mb-4 flex items-start">
            <span className="w-4 h-4 mr-4 text-blue-500">•</span>
            <div>
              <h2 className="text-xl font-semibold">Murales</h2>
              <p className="text-gray-700">Murales artísticos para decorar espacios públicos y privados.</p>
            </div>
          </li>
          <li className="mb-4 flex items-start">
            <span className="w-4 h-4 mr-4 text-blue-500">•</span>
            <div>
              <h2 className="text-xl font-semibold">Otros</h2>
              <p className="text-gray-700">Otros servicios artísticos personalizados según las necesidades del cliente.</p>
            </div>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-md">
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
    </div>
  );
};

export default Services;


