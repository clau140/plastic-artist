import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, setCategoryFilter } from '../redux/slices/jobsSlice';
import { Link } from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';

const Jobs = () => {
  const dispatch = useDispatch();
  const { filteredJobs, categoryFilter, status, error } = useSelector((state) => state.jobs);

  const [localCategoryFilter, setLocalCategoryFilter] = React.useState(categoryFilter);
  const [currentPage, setCurrentPage] = React.useState(1);
  const jobsPerPage = 6;

  React.useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(setCategoryFilter(localCategoryFilter));
  }, [localCategoryFilter, dispatch]);

  const handleCategoryChange = (e) => {
    setLocalCategoryFilter(e.target.value);
    setCurrentPage(1); 
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  if (status === 'loading') {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r p-8">
      <div className="container mx-auto">
        <div className="mb-8 mt-12">
          <Link to="/" className="text-sky-blue hover:underline">
            Volver a Inicio
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-white">Trabajos</h1>

        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-6">
          <select
            value={localCategoryFilter}
            onChange={handleCategoryChange}
            className="p-2 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todas las categorías</option>
            <option value="Cuadros">Cuadros</option>
            <option value="Retratos">Retratos</option>
            <option value="Carteles personalizados">Carteles personalizados</option>
            <option value="Murales">Murales</option>
            <option value="Esculturas">Esculturas</option>
            <option value="Otros">Otros</option>
          </select>
          <Search/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentJobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Jobs;

