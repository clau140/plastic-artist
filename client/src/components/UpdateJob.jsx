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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Job</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">{error}</p>}
      {job && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              required
            >
              <option value="">Select a category</option>
              <option value="Cuadros">Cuadros</option>
              <option value="Retratos">Retratos</option>
              <option value="Carteles personalizados">Carteles personalizados</option>
              <option value="Murales">Murales</option>
              <option value="Esculturas">Esculturas</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update Job
          </button>
        </form>
      )}
    </div>
  );
};



export default UpdateJob;
