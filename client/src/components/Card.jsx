import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ job }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <Link to={`/jobs/${job.id}`}>
        <img src={job.image} alt={job.title} className="w-full h-40 object-cover" />
      
      <div className="p-4">
        
          <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
        
        <p className="text-gray-600 mb-2">{job.description}</p>
        <p className="text-gray-800 font-bold">{job.category}</p>
      </div>
      </Link>
    </div>
  );
};

export default Card;



