import React from 'react';

const Card = ({ job }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <img src={job.imageUrl} alt={job.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{job.name}</h2>
        <p className="text-gray-600 mb-2">{job.description}</p>
        <p className="text-gray-800 font-bold">{job.category}</p>
      </div>
    </div>
  );
};

export default Card;
