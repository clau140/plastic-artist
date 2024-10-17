import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, deleteJob } from '../redux/slices/jobsSlice';
import { Link } from 'react-router-dom';
import CreateJob from '../components/CreateJobs';
import { PlusCircleIcon } from '@heroicons/react/24/solid'; 
import backgroundImage from '../assets/home1.jpg';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state) => state.jobs);
  const [showCreateJob, setShowCreateJob] = useState(false);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este trabajo?')) {
      dispatch(deleteJob(id));
    }
  };

  const toggleCreateJobForm = () => {
    setShowCreateJob(!showCreateJob);
  };

  if (status === 'loading') return <div className="text-center text-gray-500">Cargando...</div>;
  if (status === 'failed') return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center p-6 bg-gray-900 bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Panel de Control
        </h1>

        <button
          onClick={toggleCreateJobForm}
          className="bg-green-600 text-white px-4 py-2 rounded-full mb-6 hover:bg-green-700 transition duration-300 ease-in-out flex items-center"
        >
          <PlusCircleIcon className="h-6 w-6 mr-2" /> Nuevo Trabajo
        </button>

        {showCreateJob && (
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8">
            <CreateJob />
          </div>
        )}

        <div className="relative overflow-x-auto shadow-lg rounded-lg w-full max-w-4xl">
          <table className="w-full text-sm text-left text-gray-900 bg-white dark:text-gray-100">
            <thead className="text-xs text-white uppercase bg-blue-600 dark:bg-blue-700">
              <tr>
                <th scope="col" className="px-6 py-3">Imagen</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className={`border-b ${job.id % 2 === 0 ? 'bg-blue-500' : 'bg-blue-600'} border-blue-400`}
                >
                  <td className="px-6 py-4">
                    <img src={job.images[0]} alt={job.title} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 text-white">
                    <Link to={`/jobs/${job.id}`} className="hover:underline text-lg font-semibold text-white">{job.title}</Link>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <Link
                      to={`/jobs/edit/${job.id}`}
                      className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300 ease-in-out"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;