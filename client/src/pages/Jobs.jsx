import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, setCategoryFilter } from '../redux/slices/jobsSlice';
import { useState } from 'react';
import Card from '../components/Card'; 

const Jobs= () => {
  const dispatch = useDispatch();
  const { filteredJobs, categoryFilter, status, error } = useSelector((state) => state.jobs);

  const [localCategoryFilter, setLocalCategoryFilter] = useState(categoryFilter);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobs());
    }
  }, [dispatch, status]);

 

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
      <h1 className="text-3xl font-bold mb-4">Trabajos</h1>

      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        

        <select
          value={localCategoryFilter}
          onChange={handleCategoryChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="">Todas las categorías</option>
          
          <option value="category1">Categoría 1</option>
          <option value="category2">Categoría 2</option>
          <option value="category3">Categoría 3</option>
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
