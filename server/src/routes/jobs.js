const express = require('express');
const router = express.Router();
const {Jobs} = require('../db');


router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const query = category ? { where: { category } } : {};
    const jobs = await Jobs.findAll(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).send('Error fetching drawings');
  }
});


router.get('/:id', async (req, res) => {
  try {
    const jobs = await Jobs.findByPk(req.params.id);
    if (!jobs) return res.status(404).send('Jobs not found');
    res.json(jobs);
  } catch (error) {
    res.status(500).send('Error fetching jobs');
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;

   
    if (!title || !description || !imageUrl || !category) {
      return res.status(400).send('All fields are required');
    }

    
    const newJobs = await Jobs.create({
      title,
      description,
      imageUrl,
      category,
    });

    res.status(201).json(newJobs);
  } catch (error) {
    res.status(500).send('Error creating jobs');
  }
});

module.exports = router;
