import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, sendContactMessage } from '../redux/slices/contactSlice';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import PincelImage from '../assets/pincel.png'; 

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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 relative">
      <div className="mb-8 mt-12">
        <Link to="/" className="text-sky-blue hover:underline">
          Volver a Inicio
        </Link>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 mt-16">
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-2xl">
          <h1 className="text-2xl font-sans font-bold mb-4">Formulario de contacto</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
        
        <div className="relative p-6 rounded-lg shadow-2xl">
          
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

          <div className="relative z-10 p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
            <div className="mb-4 flex items-center">
              <FaPhone className="text-gray-700 mr-2" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Número de Contacto:</h3>
                <p className="text-gray-700">+598 456 7890</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-gray-700 mr-2" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Ubicación:</h3>
                <p className="text-gray-700">Fray Bentos, Uruguay</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <FaWhatsapp className="text-gray-700 mr-2" />
              <div>
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
          <img
              src={PincelImage}
              alt="pincel"
              className="absolute bottom-0 right-0 w-60 h-auto object-cover"
            />
        </div>
      </div>
    </div>
  );
};

export default Contact;
