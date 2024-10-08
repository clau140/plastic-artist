const express = require('express');
const router = express.Router();
const { Jobs } = require('../db');
const cloudinary = require('../config/cloudinaryConfig'); 

const fs = require('fs');  
const path = require('path');
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

router.post('/', upload.array('images', 10), async (req, res) => { 
  try {
    const { title, description, category } = req.body;
    const images = req.files; 

    if (!title || !description || !images || !category) {
      return res.status(400).send('All fields are required');
    }

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path);
        fs.unlinkSync(image.path); 
        return result.secure_url; 
      })
    );

    const newJob = await Jobs.create({
      title,
      description,
      images: imageUrls, 
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

    let imageUrl = job.image;
    if (imageFile) {
      const result = await cloudinary.uploader.upload(imageFile.path);
      imageUrl = result.secure_url;

      // Para eliminar archivo temporal
      fs.unlinkSync(imageFile.path);
    }

    const [updated] = await Jobs.update(
      { title, description, image: imageUrl, category },
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
    const job = await Jobs.findByPk(req.params.id);

    if (!job) return res.status(404).send('Job not found');

    
    const imageUrl = job.image;
    if (imageUrl) {
      const publicId = path.basename(imageUrl, path.extname(imageUrl));  
      await cloudinary.uploader.destroy(publicId);  
    }

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

