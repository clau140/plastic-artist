const express = require('express');
const router = express.Router();
//const Professor = require('../models/Professor');
const {Professor} = require('../db');

router.get('/', async (req, res) => {
  try {
    const professor = await Professor.findOne();
    if (!professor) return res.status(404).send('Professor not found');
    res.json(professor);
  } catch (error) {
    res.status(500).send('Error fetching professor data');
  }
});

module.exports = router;
