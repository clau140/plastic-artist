
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice'; 
import contactReducer from './slices/contactSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    jobs: jobsReducer, 
  },
});

