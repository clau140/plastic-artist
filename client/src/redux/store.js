
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import contactReducer from './slices/contactSlice'

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    contact: contactReducer,
  },
});

export default store;


