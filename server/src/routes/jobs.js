const express = require('express');
const router = express.Router();
const { Jobs } = require('../db');
const cloudinary = require('../config/cloudinaryConfig'); 
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); 



router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const query = category ? { where: { category } } : {};
    const jobs = await Jobs.findAll(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).send('Error fetching jobs');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const job = await Jobs.findByPk(req.params.id);
    if (!job) return res.status(404).send('Job not found');
    res.json(job);
  } catch (error) {
    res.status(500).send('Error fetching job');
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('Request body:', req.body); 
    console.log('Request file:', req.file);

    const { title, description, category } = req.body;
    const image = req.file;

    if (!title || !description || !image || !category) {
      console.log('Missing fields'); 
      return res.status(400).send('All fields are required');
    }

    // Subir imagen a Cloudinary
    const result = await cloudinary.uploader.upload(image.path);
    console.log('Cloudinary upload result:', result); 

    const newJob = await Jobs.create({
      title,
      description,
      image: result.secure_url, 
      category,
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error creating job:', error); 
    res.status(500).send('Error creating job');
  }
});


router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const imageFile = req.file;

    const job = await Jobs.findByPk(req.params.id);

    if (!job) return res.status(404).send('Job not found');

    let imageUrl = job.imageUrl;
    if (imageFile) {
      const result = await cloudinary.uploader.upload(imageFile.path);
      imageUrl = result.secure_url;
    }

    const [updated] = await Jobs.update(
      { title, description, imageUrl, category },
      { where: { id: req.params.id } }
    );

    if (updated) {
      const updatedJob = await Jobs.findByPk(req.params.id);
      res.json(updatedJob);
    } else {
      res.status(404).send('Job not found');
    }
  } catch (error) {
    res.status(500).send('Error updating job');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Jobs.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Job not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting job');
  }
});

module.exports = router;
