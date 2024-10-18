import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobById, updateJob } from '../redux/slices/jobsSlice';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const job = useSelector((state) => state.jobs.selectedJob);
  const status = useSelector((state) => state.jobs.status);
  const error = useSelector((state) => state.jobs.error);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    dispatch(fetchJobById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || '',
        description: job.description || '',
        category: job.category || '',
        image: null,
      });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    if (formData.image) data.append('image', formData.image);

    dispatch(updateJob({ id, jobData: data })).then(() => {
      if (status === 'succeeded') {
        navigate('/jobs');
      }
    });
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Editar Trabajo</h1>
      {status === 'loading' && <p className="text-blue-500">Cargando...</p>}
      {status === 'failed' && <p className="text-red-500">{error}</p>}
      {job && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Título:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Descripción:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Categoría:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="Cuadros">Cuadros</option>
              <option value="Retratos">Retratos</option>
              <option value="Carteles personalizados">Carteles personalizados</option>
              <option value="Murales">Murales</option>
              <option value="Esculturas">Esculturas</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Imagen:</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Actualizar Trabajo
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateJob;
