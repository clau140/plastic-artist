import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  message: '',
  status: '', 
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {

    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.message = '';
      state.status = '';
    },
  },
});

export const { setName, setEmail, setMessage, setStatus, resetForm } = contactSlice.actions;

export const sendContactMessage = (contactData) => async (dispatch) => {
  dispatch(setStatus('sending'));
  try {
    await axios.post('http://localhost:3001/contact', contactData);
    dispatch(setStatus('success'));
    dispatch(resetForm());
  } catch (error) {
    dispatch(setStatus('error'));
  }
};

export default contactSlice.reducer;