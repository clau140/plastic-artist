const express = require('express');
const router = express.Router();
const {Drawing} = require('../db');


router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const query = category ? { where: { category } } : {};
    const drawings = await Drawing.findAll(query);
    res.json(drawings);
  } catch (error) {
    res.status(500).send('Error fetching drawings');
  }
});


router.get('/:id', async (req, res) => {
  try {
    const drawing = await Drawing.findByPk(req.params.id);
    if (!drawing) return res.status(404).send('Drawing not found');
    res.json(drawing);
  } catch (error) {
    res.status(500).send('Error fetching drawing');
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl, category } = req.body;

   
    if (!title || !description || !imageUrl || !category) {
      return res.status(400).send('All fields are required');
    }

    
    const newDrawing = await Drawing.create({
      title,
      description,
      imageUrl,
      category,
    });

    res.status(201).json(newDrawing);
  } catch (error) {
    res.status(500).send('Error creating drawing');
  }
});

module.exports = router;
