import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, sendContactMessage } from '../redux/slices/contactSlice';
import { Link } from 'react-router-dom';

const Contact = () => {
  const dispatch = useDispatch();
  const { name, email, message, status } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') dispatch(setName(value));
    if (name === 'email') dispatch(setEmail(value));
    if (name === 'message') dispatch(setMessage(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactMessage({ name, email, message }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8">
      <div className="mb-8">
          <Link to="/" className="text-sky-blue hover:underline">
            Volver a Inicio
          </Link>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Contactar al Dibujante</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Enviar
            </button>
            {status && (
              <p className={`mt-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Mensaje enviado con éxito!' : 'Error al enviar el mensaje.'}
              </p>
            )}
          </form>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Número de Contacto:</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Ubicación:</h3>
            <p className="text-gray-700">123 Calle Principal, Ciudad, País</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">WhatsApp:</h3>
            <a
              href="https://wa.me/1234567890"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envíame un mensaje por WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
