import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../redux/slices/jobsSlice';

const categories = ['Cuadros', 'Retratos', 'Carteles personalizados', 'Murales', 'Otros'];

const CreateJob = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.jobs);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files); 
    setImages((prevImages) => [...prevImages, ...selectedFiles]); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
  
    images.forEach((image) => {
      formData.append('images', image); 
    });
  
    dispatch(createJob(formData));
  };

  return (
    <div>
      <div className="absolute inset-0 bg-cover bg-center bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto grid md:grid-cols-1 gap-8 mt-16">
        <div className="p-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-2xl text-white">
            <h1 className="text-2xl font-sans font-bold mb-4">Crear Nuevo Trabajo</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-white">Título:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-white">Descripción:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500 text-black"
                  rows="4"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-white">Categoría:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500 text-black"
                  required
                >
                  <option value="" disabled>Selecciona una categoría</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="images" className="block text-white">Imágenes:</label>
                <input
                  type="file"
                  id="images"
                  onChange={handleImageChange}
                  className="form-input p-3 rounded w-full focus:ring-2 focus:ring-blue-500 text-black"
                  accept="image/*"
                  multiple 
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Creando...' : 'Crear Trabajo'}
              </button>
              {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
