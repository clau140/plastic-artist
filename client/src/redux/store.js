// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import contactReducer from './slices/contactSlice';
import authReducer from './slices/authSlice';  

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    contact: contactReducer,
    auth: authReducer,  
  },
});

export default store;

