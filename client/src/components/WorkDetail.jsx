import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchJobById } from '../redux/slices/jobsSlice';
import { FaTimes } from 'react-icons/fa';

const WorkDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedJob, status, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!selectedJob) {
    return <div>No job found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 mt-12">
        <Link to="/" className="text-sky-blue hover:underline">
          Volver a Inicio
        </Link>
      </div>
      
      <div className="relative bg-white shadow-lg rounded-2xl p-4">
        <Link to="/jobs" className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition-colors duration-200">
          <FaTimes size={20} />
        </Link>

        <h1 className="text-3xl font-bold mb-4">{selectedJob.title}</h1>
        <img
          src={selectedJob.image}
          alt={selectedJob.title}
          className="w-full h-80 object-cover mb-4 rounded-xl"
        />
        <p className="text-gray-600 mb-4">{selectedJob.description}</p>
        <p className="text-gray-800 font-bold">{selectedJob.category}</p>
      </div>
    </div>
  );
};

export default WorkDetail;
