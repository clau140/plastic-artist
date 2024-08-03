import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/slices/jobsSlice'; 

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.jobs.searchQuery);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Buscar trabajos"
        className="px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-blue"
      />
    </div>
  );
};

export default Search;
