import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Galería</h1>
      
      <div className="mt-8">
        <Link to="/" className="text-sky-blue hover:underline">
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
