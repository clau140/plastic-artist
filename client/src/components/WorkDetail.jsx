import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJobById } from '../redux/slices/jobsSlice';

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
      <h1 className="text-3xl font-bold mb-4">{selectedJob.title}</h1>
      <img src={selectedJob.image} alt={selectedJob.title} className="w-full h-80 object-cover mb-4" />
      <p className="text-gray-600 mb-4">{selectedJob.description}</p>
      <p className="text-gray-800 font-bold">{selectedJob.category}</p>
    </div>
  );
};

export default WorkDetail;
