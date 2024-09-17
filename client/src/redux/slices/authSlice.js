
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const initialState = {
  username: '',
  token: null,
  status: '', 
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.status = 'succeeded';
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    loginFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.status = 'idle';
      state.token = null;
      state.username = '';
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;



export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://localhost:3001/user/login', credentials);
    dispatch(loginSuccess(response.data));
    localStorage.setItem('token', response.data.token);
    toast.success('Inicio de sesión exitoso');
    setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    
  } catch (error) {
    dispatch(loginFailure(error.response.data.error || 'Inicio de sesión fallido'));
    toast.error(error.response.data.error || 'Inicio de sesión fallido');
  }
};


export default authSlice.reducer;
