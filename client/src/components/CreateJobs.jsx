import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../redux/slices/jobsSlice';

const categories = [
  'Cuadros', 'Retratos', 'Carteles personalizados', 'Murales', 'Otros'
];

const CreateJob = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.jobs);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    dispatch(createJob(formData));
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-3xl font-bold mb-6">Crear Nuevo Trabajo</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
              Título
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
              type="text"
              placeholder="Título del trabajo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
              Descripción
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              placeholder="Descripción del trabajo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
              Categoría
            </label>
            <select
              id="category"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
              Imagen
            </label>
            <input
              type="file"
              id="image"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Creando...' : 'Crear Trabajo'}
        </button>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default CreateJob;
