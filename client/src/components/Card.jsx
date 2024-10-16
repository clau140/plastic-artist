import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ job }) => {
  return (
    <div className="rounded-lg shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden transform hover:scale-105">
      <Link to={`/jobs/${job.id}`}>
        <img
          src={job.images && job.images.length > 0 ? job.images[0] : 'default-image-url'} // Reemplaza 'default-image-url' por una URL por defecto si no hay imágenes
          alt={job.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out">{job.title}</h2>
          <p className="text-gray-600 mb-3">{job.description}</p>
          <p className="text-gray-800 font-bold">{job.category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;