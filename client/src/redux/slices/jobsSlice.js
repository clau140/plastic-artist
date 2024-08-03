
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios'; 


export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await axios.get('/jobs'); 
  return response.data;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],               
    filteredJobs: [],       
    searchQuery: '',        
    categoryFilter: '',     
    status: 'idle',         
    error: null             
  },
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
        state.filteredJobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const { setJobs, setSearchQuery, setCategoryFilter } = jobsSlice.actions;


export default jobsSlice.reducer;
