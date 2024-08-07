import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await axios.get('http://localhost:3001/jobs');
  return response.data;
});


export const fetchJobById = createAsyncThunk('jobs/fetchJobById', async (id) => {
  const response = await axios.get(`http://localhost:3001/jobs/${id}`);
  return response.data;
});


export const createJob = createAsyncThunk('jobs/createJob', async (jobData) => {
  const response = await axios.post('http://localhost:3001/jobs', jobData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
});


export const deleteJob = createAsyncThunk('jobs/deleteJob', async (jobId) => {
  await axios.delete(`http://localhost:3001/jobs/${jobId}`);
  return jobId;
});


const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    selectedJob: null,
    filteredJobs: [],
    searchQuery: '',
    categoryFilter: '',
    status: 'idle',
    error: null
  },
  reducers: {
   
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredJobs = state.jobs.filter(job =>
        job.title.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
        (state.categoryFilter ? job.category === state.categoryFilter : true)
      );
    },

    
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
      state.filteredJobs = state.jobs.filter(job =>
        (job.category === state.categoryFilter || !state.categoryFilter) &&
        job.title.toLowerCase().includes(state.searchQuery.toLowerCase())
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
      })

      
      .addCase(fetchJobById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedJob = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

     
      .addCase(createJob.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs.push(action.payload);
        state.filteredJobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job.id !== action.payload);
        state.filteredJobs = state.filteredJobs.filter(job => job.id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearchQuery, setCategoryFilter } = jobsSlice.actions;

export default jobsSlice.reducer;
