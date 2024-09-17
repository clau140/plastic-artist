import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BackgroundImage from '../assets/login.jpg';
import { loginUser } from '../redux/slices/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white p-8 relative" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="bg-[rgba(173, 216, 230, 0.7)] backdrop-blur-md p-6 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-2xl font-sans font-bold mb-4">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700">Nombre de Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default Login;
