import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, setCategoryFilter } from '../redux/slices/jobsSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Jobs = () => {
  const dispatch = useDispatch();
  const { filteredJobs, categoryFilter, status, error } = useSelector((state) => state.jobs);

  const [localCategoryFilter, setLocalCategoryFilter] = useState(categoryFilter);

  useEffect(() => {
    
      dispatch(fetchJobs());
    
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCategoryFilter(localCategoryFilter));
  }, [localCategoryFilter, dispatch]);

  const handleCategoryChange = (e) => {
    setLocalCategoryFilter(e.target.value);
  };

  if (status === 'loading') {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">

      <div className="mt-8">
        <Link to="/" className="text-sky-blue hover:underline">
          Volver a Inicio
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Trabajos</h1>

      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        <select
          value={localCategoryFilter}
          onChange={handleCategoryChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="">Todas las categorías</option>
          <option value="Cuadros">Cuadros</option>
          <option value="Retratos">Retratos</option>
          <option value="Carteles personalizados">Carteles personalizados</option>
          <option value="Murales">Murales</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
