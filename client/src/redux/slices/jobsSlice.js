
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],           
  filteredJobs: [],   
  searchQuery: '',    
  categoryFilter: '', 
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {

    setJobs: (state, action) => {
      state.jobs = action.payload;         
      state.filteredJobs = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; 
      
      state.filteredJobs = state.jobs.filter(job =>
        job.name.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
        (state.categoryFilter ? job.category === state.categoryFilter : true)
      );
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload; 
      
      state.filteredJobs = state.jobs.filter(job =>
        (job.category === state.categoryFilter || !state.categoryFilter) &&
        job.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});


export const { setJobs, setSearchQuery, setCategoryFilter } = jobsSlice.actions;


export default jobsSlice.reducer;
