import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, sendContactMessage } from '../redux/slices/contactSlice';

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
    <div className="container mx-auto p-4 mt-16"> {/* Ajuste de margen superior */}
      <h1 className="text-3xl font-bold mb-4">Contactar al Dibujante</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
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
  );
};

export default Contact;
