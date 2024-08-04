const express = require('express');
const router = express.Router();
const { Jobs } = require('../db');

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

router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;

    if (!title || !description || !imageUrl || !category) {
      return res.status(400).send('All fields are required');
    }

    const newJob = await Jobs.create({
      title,
      description,
      imageUrl,
      category,
    });

    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).send('Error creating job');
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;

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
